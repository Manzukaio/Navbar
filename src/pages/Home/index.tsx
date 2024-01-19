import React from "react";
import { Dimensions, ImageBackground, ScrollView, Text, View } from "react-native";

//Style
import { HomeView } from "./style";

//Componentes
import Filter from "../../components/Filter";
import Header from "../../components/Hearder";
import HomeCard from "../../components/HomeCard";
import BottomTab from "../../components/BottomTab";

const height = 0.2 * Dimensions.get("screen").width; //Altura muda conforme a largura da tela

export default function Home({ card1, card2 }: any) {
  return (
    <HomeView>
      <Header />
      <Filter />
      <ScrollView
        style={{
          marginBottom: height,
          height: "100%",
          padding: "6px",
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
        }}
      >
        <View style={{ marginBottom: 16 }}>
          <HomeCard {...card1} />
          <HomeCard {...card2} />
        </View>
      </ScrollView>
      {/* <BottomTab /> */}
      <ImageBackground source={require("../../../assets/barrinha.svg")} resizeMode="cover" style={{ width: "100%", height: 88, bottom: 0, position: 'fixed',zIndex:1 }}></ImageBackground>
    </HomeView>
  );
}
