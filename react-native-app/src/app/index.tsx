import { View, Text } from "react-native";
import { Header } from "@/components/header";
import { CategoryButton } from "@/components/category-button";

export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={7} />

      <View className="flex-row flex-wrap gap-3">
        <CategoryButton title="Lanche do dia" isSelected/>
      </View>
    </View>
  );
}
