import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { useCartStore } from "@/stores/cart-store";

import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/button";
import LinkButton from "@/components/link-button";

export default function Product() {
  const cartStore = useCartStore();
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.filter((item) => item.id === id)[0];

  function handleAddCart() {
    cartStore.add(product);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1">
        {/* Cover */}
        <Image
          source={product.cover}
          className="w-full h-52"
          resizeMode="cover"
        />

        {/* Price + Description + Ingredients */}
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

        {/* Botao */}
        <View className="p-5 pb-8 gap-5">
          <Button onPress={handleAddCart}>
            <Button.Icon>
              <Feather name="plus-circle" size={20} />
            </Button.Icon>
            <Button.Text>Adicionar ao pedido</Button.Text>
          </Button>

          <LinkButton title="Voltar ao cardápio" href="/" />
        </View>
      </View>
    </ScrollView>
  );
}
