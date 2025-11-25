import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MapPin, TrendingUp, Users } from "lucide-react";
import { Property } from "@/data/mockData";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const percentSold = (property.tokensSold / property.totalTokens) * 100;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge 
            variant={property.status === "Available" ? "default" : "secondary"}
            className={property.status === "Available" ? "bg-green-600" : ""}
          >
            {property.status}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{property.title}</h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {property.location}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Financial Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">Price / Token</p>
            <p className="font-bold text-lg">${property.pricePerToken}</p>
          </div>
          <div className="p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">Expected APY</p>
            <div className="flex items-center text-green-600 font-bold text-lg">
              <TrendingUp className="w-4 h-4 mr-1" />
              {property.apy}%
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tokens Sold</span>
            <span className="font-medium">{percentSold.toFixed(1)}%</span>
          </div>
          <Progress value={percentSold} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{property.tokensSold} sold</span>
            <span>{property.totalTokens} total</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button className="w-full font-semibold" size="lg">
          Buy Tokens
        </Button>
      </CardFooter>
    </Card>
  );
}