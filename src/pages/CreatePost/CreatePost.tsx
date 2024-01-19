import React from "react";
import { Screen } from "./style";
import PostForm from "../../components/CreatePost/PostForm";
import { ImageBackground } from "react-native";



export default function CreatePost() {
    return (
        <Screen>
            <PostForm></PostForm>
            <ImageBackground source={require("../../../assets/barrinha.svg")} resizeMode="cover" style={{ width: "100%", height: 88, bottom: 0, position: 'fixed',zIndex:1 }}></ImageBackground>
        </Screen>
    )
}