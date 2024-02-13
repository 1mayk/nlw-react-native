import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

type HeaderProps = {
  title: string;
};

export function Header({ title }: HeaderProps) {
  return (
    // Por algum motivo, ao retirar o flex-row o conteúdo some, por que?
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      {/* FAÇA SEU PEDIDO */}
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
        <Text className="text-white text-xl font-heading">{title}</Text>
      </View>

      {/* CARRINHO */}
      <TouchableOpacity>
        <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center">
          <Text className="text-slate-900 font-bold text-xs">1</Text>
        </View>

        <Feather name="shopping-bag" color={colors.white} size={24} />
      </TouchableOpacity>
    </View>
  );
}
