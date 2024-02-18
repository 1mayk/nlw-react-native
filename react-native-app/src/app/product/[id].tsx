import { View, Text, Image } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";

import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/button";

export default function Product() {
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.filter((item) => item.id === id)[0];

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
          >
            {/* Código que gera bullet point (bolinha no texto) */}
            {"\u2022"} {ingredient}
          </Text>
        ))}
      </View>

      <Link href={`/`}>
        <Text className="text-2xl text-white font-heading">Voltar</Text>
      </Link>
    </View>
  );
}
