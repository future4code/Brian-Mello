import express from "express";
import { SignUpEndpoint } from "./endpoints/User/signUp";
import { LoginEndpoint } from "./endpoints/User/login";
import { FollowUserEndpoit } from "./endpoints/UserRelations/followUser";
import { AddUserEndpoit } from "./endpoints/UserRelations/addUser";
import { UnfollowUserEndpoint } from "./endpoints/UserRelations/unfollowUser";
import { DeleteUserEndpoit } from "./endpoints/UserRelations/deleteUser";
import { CreatePostEndPoint } from "./endpoints/Post/createPost";
import { FeedOfPostsEnpoint } from "./endpoints/Feed/getFeedOfPosts";
import { FeedOfPostsByType } from "./endpoints/Feed/getFeedOfPostsByType";



const app = express();
app.use(express.json());

// send data
app.post("/signUp", SignUpEndpoint);
app.post("/login", LoginEndpoint);
app.post("/user/followUser", FollowUserEndpoit );
app.post("/user/addUser", AddUserEndpoit);
app.post("/createPost", CreatePostEndPoint);

// delete data
app.delete("/user/unfollow", UnfollowUserEndpoint);
app.delete("/user/deleteFriendship", DeleteUserEndpoit)

// get data
app.get("/feed", FeedOfPostsEnpoint);
app.get("/feed/type", FeedOfPostsByType);

export default app;
