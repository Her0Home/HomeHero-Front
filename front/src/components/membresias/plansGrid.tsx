"use client"
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { membresias } from "@/helpers/membresias";
import { useAuth } from "@/context/authcontext";
import { PostLinkStripe } from "@/services/Stripe";
import { useState } from "react";

export default function PlansGrid() {

  const { user, token, isAuth } = useAuth();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleSubscribe = async (priceId: string) => {
    if (!user?.id) {
      console.error("No hay usuario logueado");
      return;
    }
    
    if (!token) {
      console.error("No hay token disponible");
      return;
    }
    try {
      setLoadingPlan(priceId);
      const res = await PostLinkStripe(user?.id, priceId, token);

      if (res.data?.url) {
        window.location.href = res.data.url; // redirige al link de Stripe
      } else {
        console.error("No se obtuvo el link de Stripe", "Error:", res.errors, "Mensaje:", res.message);
      }
    } catch (err) {
      console.error("Error al crear sesión de Stripe", err);
    } finally {
      setLoadingPlan(null);
    }
  };
  
  return (
    <div className="bg-gray-50">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 mb-12 md:grid-cols-3">
          {membresias.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-orange-500 scale-105"
                  : "hover:scale-105"
              } ${!plan.active ? "opacity-60 grayscale" : "hover:shadow-xl"}`}
            >
              {plan.popular && plan.active && (
                <div className="absolute top-0 left-0 right-0 py-2 text-sm text-center text-white font-Title bg-gradient-to-r from-orange-500 via-hero-purple to-hero-blue">
                  ⭐ Más Popular
                </div>
              )}

              {!plan.active && (
                <div className="absolute top-0 left-0 right-0 py-2 text-sm text-center text-white font-Title bg-gray-700">
                  🚫 No disponible por el momento
                </div>
              )}

              <CardHeader
                className={plan.popular && plan.active ? "pt-12" : ""}
              >
                <div className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="mb-2 text-2xl font-Title">
                    {plan.name}
                  </CardTitle>
                  <p className="mb-4 text-sm text-gray-600">
                    {plan.description}
                  </p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {plan.id === "monthly" &&
                        `${plan.monthlyPrice} USD / mes`}
                      {plan.id === "quarterly" &&
                        `${plan.quarterlyPrice} USD / 3 meses`}
                      {plan.id === "annual" && `${plan.annualPrice} USD / año`}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {plan.id === "quarterly" &&
                        `≈ ${(plan.quarterlyPrice! / 3).toFixed(2)} USD al mes`}
                      {plan.id === "annual" &&
                        `≈ ${(plan.annualPrice / 12).toFixed(2)} USD al mes`}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center space-x-3 font-Text"
                    >
                      {feature.included ? (
                        <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                      ) : (
                        <X className="flex-shrink-0 w-5 h-5 text-gray-300" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  {plan.active ? (
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-gradient-to-r from-orange-500 via-hero-purple to-hero-blue hover:from-orange-600 hover:to-blue-600 text-white"
                            : "bg-gray-900 hover:bg-gray-800 text-white"
                        }`}
                        onClick={() => handleSubscribe(plan.priceId)}
           
                        disabled={loadingPlan === plan.priceId || isAuth !== true}
                      >
                        {loadingPlan === plan.priceId ? "Redirigiendo..." : `Suscribirse a ${plan.name}`}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                  ) : (
                    <Button disabled className="w-full bg-gray-400 text-white">
                      No disponible
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}