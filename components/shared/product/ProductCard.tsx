import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

function ProductCard({ product }: { product: any }) {
  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="p-0 items-center">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              priority
            />
          </Link>
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
          <div className="text-xs">{product.brand}</div>
          <Link href={`product/${product.slug}`}>
            <h2 className="text-sm font-meduim">{product.name}</h2>
          </Link>
          <div className="flex justify-between items-center gap-4">
            {product.stock > 0 ? (
              <p className="font-bold">{product.price}</p>
            ) : (
              <p>ناموجود</p>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCard;
