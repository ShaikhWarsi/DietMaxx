import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VitaminOptimizationPage() {
  const vitamins = [
    {
      name: "Vitamin D3",
      dosage: "1000-4000 IU daily",
      description: "Vitamin D3 is crucial for bone health, immune system function, and mood regulation. It helps the body absorb calcium and phosphorus, vital for strong bones. Deficiency is common, especially in those with limited sun exposure.",
      benefits: ["Bone health", "Immune support", "Mood regulation"],
      deficiencySymptoms: ["Fatigue", "Bone pain", "Depression"],
      foodSources: ["Fatty fish", "Egg yolks", "Fortified foods"],
    },
    {
      name: "Vitamin B12",
      dosage: "2.4 mcg daily",
      description: "Vitamin B12 is essential for nerve tissue health, brain function, and the production of red blood cells. It plays a vital role in DNA synthesis and metabolism. Deficiency can lead to anemia and neurological problems.",
      benefits: ["Energy production", "Nerve function", "Red blood cell formation"],
      deficiencySymptoms: ["Fatigue", "Memory problems", "Numbness"],
      foodSources: ["Meat", "Fish", "Dairy products"],
    },
    {
      name: "Vitamin C",
      dosage: "65-90 mg daily",
      description: "Vitamin C is a powerful antioxidant that supports the immune system, aids in collagen synthesis for healthy skin, bones, and blood vessels, and improves the absorption of iron. It's vital for overall health and disease prevention.",
      benefits: ["Immune support", "Collagen synthesis", "Antioxidant"],
      deficiencySymptoms: ["Scurvy", "Poor wound healing", "Fatigue"],
      foodSources: ["Citrus fruits", "Berries", "Bell peppers"],
    },
    {
      name: "Vitamin K2",
      dosage: "100-300 mcg daily",
      description: "Vitamin K2 is essential for proper calcium utilization, directing calcium to bones and teeth while preventing its accumulation in arteries and soft tissues. It plays a vital role in cardiovascular health and bone density.",
      benefits: ["Bone health", "Cardiovascular health", "Calcium regulation"],
      deficiencySymptoms: ["Easy bruising", "Excessive bleeding", "Osteoporosis"],
      foodSources: ["Natto", "Hard cheeses", "Egg yolks", "Chicken liver"],
    },
    {
      name: "Vitamin A",
      dosage: "700-900 mcg RAE daily",
      description: "Vitamin A is vital for vision, immune function, and skin health. It plays a crucial role in cell growth and differentiation, maintaining the integrity of epithelial tissues. Both preformed Vitamin A (retinol) and provitamin A carotenoids are important.",
      benefits: ["Vision health", "Immune support", "Skin health"],
      deficiencySymptoms: ["Night blindness", "Dry eyes", "Impaired immunity"],
      foodSources: ["Carrots", "Sweet potatoes", "Spinach", "Liver"],
    },
    {
      name: "Vitamin E",
      dosage: "15 mg daily",
      description: "Vitamin E is a powerful antioxidant that protects cells from damage caused by free radicals. It supports immune function, skin health, and plays a role in red blood cell formation. It's particularly important for maintaining healthy cell membranes.",
      benefits: ["Antioxidant protection", "Immune function", "Skin health"],
      deficiencySymptoms: ["Muscle weakness", "Vision problems", "Nerve damage"],
      foodSources: ["Nuts", "Seeds", "Vegetable oils", "Spinach"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="shadow-lg border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Vitamin Optimization</CardTitle>
          <CardDescription className="text-lg">
            Essential vitamins for optimal health and performance
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vitamins.map((vitamin, index) => (
          <Card key={index} className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl">{vitamin.name}</CardTitle>
              <CardDescription className="font-semibold">{vitamin.dosage}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{vitamin.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Benefits</h4>
                <div className="flex flex-wrap gap-1">
                  {vitamin.benefits.map((benefit, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Deficiency Symptoms</h4>
                <div className="flex flex-wrap gap-1">
                  {vitamin.deficiencySymptoms.map((symptom, i) => (
                    <Badge key={i} variant="destructive" className="text-xs">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Food Sources</h4>
                <div className="flex flex-wrap gap-1">
                  {vitamin.foodSources.map((source, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {source}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}