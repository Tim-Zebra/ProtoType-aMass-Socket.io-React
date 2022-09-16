import React, { useState } from 'react';
import { CreatePostButton } from '../../../../GlobalComponents/Buttons/ButtonPrimary.styled'
import { PostFormContainer, PostTitleContainer, PostTextArea, PostFormOptions } from './PostForm.styled'
import { PostTextInput } from '../../../../GlobalComponents/Forms/Form.Styled';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_POST, CHANGE_KARMA } from '../../../../utils/mutations';
import { GET_ME } from '../../../../utils/queries';
const calcPostValue = require('../../../../utils/helpers');

export default function PostForm({ setPostsArray, allPosts }) {
    // Querys username and karma
    // Sets hooks for data loading
    const { data } = useQuery(GET_ME);

    const userData = data?.me || {};

    const username = userData.username
    const [postTitle, setTitle] = useState('');
    const [postDescription, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [duration, setDuration] = useState('');
    const [address, setAddress] = useState('');
    const [createPost] = useMutation(CREATE_POST);
    const [updateKarma] = useMutation(CHANGE_KARMA);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const currentPostValue = await calcPostValue(difficulty, duration);
            const newPost = await createPost({
                variables: {
                    username: username,
                    postTitle: postTitle,
                    postDescription: postDescription,
                    postValue: currentPostValue,
                    duration: parseInt(duration),
                    difficulty: difficulty,
                    address: address,
                }
            });
            setTitle('');
            setDescription('');
            // setPostsArray sets the state of the posts array to include the newly created post
            // Deducts Karma from User when post is created
            const updatedUserKarma = userData.karma - currentPostValue;
            await updateKarma({
                variables: {
                    username: username,
                    karma: updatedUserKarma,
                }
            })
            setPostsArray([...allPosts, newPost.data.createPost]);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <PostFormContainer onSubmit={onSubmit}>
            <PostTitleContainer>
                <PostTextInput
                    type='text'
                    maxLength={50}
                    placeholder='Title'
                    value={postTitle}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <PostTextInput
                    type='text'
                    maxLength={50}
                    placeholder='Address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </PostTitleContainer>
            <PostTextArea
                maxLength={140}
                type='text'
                placeholder='What do you need help with?'
                value={postDescription}
                onChange={(e) => setDescription(e.target.value)}

            />
            <PostFormOptions>
                <select
                    id="difficulty"
                    name="difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)} >
                    <option
                    >Select Difficulty</option>
                    <option
                        value="Easy">Easy</option>
                    <option
                        value="Medium">Medium
                    </option>
                    <option
                        value="Hard">Hard
                    </option>
                </select>
                <select
                    id="duration"
                    name="difficulty"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}>
                    <option>Select Duration</option>
                    <option value="1">1 Hour</option>
                    <option value="2">2 Hours</option>
                    <option value="3">3 Hours</option>
                    <option value="4">4 Hours</option>
                </select>
                <CreatePostButton
                type='submit'>
                Create Post
                </CreatePostButton>
            </PostFormOptions>
            
        </PostFormContainer>
    )
}