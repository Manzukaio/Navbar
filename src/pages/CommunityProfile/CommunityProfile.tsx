import React from "react";
import { Screen } from "./style";
import PageBannerArea from "../../components/CommunityProfile/PageBannerArea";
import { ImageBackground, View } from "react-native";


export default function CommunityProfile() {
    return (
        <Screen>
            <PageBannerArea />
            <ImageBackground source={require("../../../assets/barrinha.svg")} resizeMode="cover" style={{ width: "100%", height: 88, bottom: 0, position: 'fixed',zIndex:1 }}></ImageBackground>
        </Screen>
    )
}