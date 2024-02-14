import { View, Image, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
};

// Faço um set padrão aqui no valor para não considerar como indefinido depois
export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    // Por algum motivo, ao retirar o flex-row o conteúdo some, por que?
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      {/* FAÇA SEU PEDIDO */}
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="h-6 w-32" />
        <Text className="text-white text-xl font-heading">{title}</Text>
      </View>

      {/* CARRINHO */}
      {cartQuantityItems > 0 && (
        <TouchableOpacity className="relative">
          <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
            <Text className="text-slate-900 font-bold text-xs">
              {cartQuantityItems}
            </Text>
          </View>

          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}
