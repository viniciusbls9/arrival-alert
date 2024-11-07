import Button from "@/components/Button";
import { onboarding, theme } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-between">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(root)/home");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View
            className={`w-[32px] h-[4px] mx-1 bg-[${theme.colors.primary[300]}] rounded-full`}
          ></View>
        }
        activeDot={
          <View
            className={`w-[32px] h-[4px] mx-1 bg-[${theme.colors.primary[500]}] rounded-full`}
          ></View>
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View
            key={item.description}
            className="flex items-center justify-center p-5"
          >
            <Image
              source={item.image}
              className="w-full h-[100px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>

            <Text
              className={`text-lg font-JakartaSemiBold text-center text-[${theme.colors.general[500]}] mx-10 mt-3`}
            >
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <Button
        onPress={() =>
          isLastSlide
            ? router.replace("/(root)/home")
            : swiperRef.current?.scrollBy(1)
        }
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
