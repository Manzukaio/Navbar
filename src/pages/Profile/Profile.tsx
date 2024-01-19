import React from "react";
import { Back, BackButton, Header, Logo, LogoutButton, LogoutText, Screen } from "./style";
import AddPhotoComponent from "../../components/Profile/AddPhotoComponent";
import ProfileOptions from "../../components/Profile/ProfileOptions";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, View } from "react-native";

export default function Profile() {

    const navigation = useNavigation()

    return (
        <Screen>

            <Header>
                <BackButton
                    onPress={() => { navigation.goBack() }}
                >
                    <Back source={require('../../../assets/back-icon.png')} />
                </BackButton>
                <Logo source={require('../../../assets/Logo-profile.png')} />
            </Header>
            <AddPhotoComponent />
            <ProfileOptions />
            <LogoutButton>
                <LogoutText>
                    Sair
                </LogoutText>
            </LogoutButton>
            <ImageBackground source={require("../../../assets/barrinha.svg")} resizeMode="cover" style={{ width: "100%", height: 88, bottom: 0, position: 'fixed' }}></ImageBackground>


        </Screen>
    )
}