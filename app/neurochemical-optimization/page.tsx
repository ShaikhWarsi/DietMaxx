import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NeurochemicalOptimizationPage() {
  const neurochemicals = [
    {
      name: "Dopamine",
      function: "Motivation & Reward",
      description: "Dopamine is a neurotransmitter that plays a major role in reward-motivated behavior. It's associated with feelings of pleasure, achievement, and motivation. Proper dopamine levels are crucial for focus, learning, and overall drive.",
      symptomsOfImbalance: {
        low: ["Lack of motivation", "Fatigue", "Difficulty concentrating", "Anhedonia"],
        high: ["Anxiety", "Restlessness", "Insomnia", "Impulsivity"],
      },
      optimizers: ["Tyrosine", "Exercise", "Protein", "Cold exposure"],
      foods: ["Almonds", "Avocados", "Bananas", "Lean meats"],
      supplements: ["L-Tyrosine", "Mucuna Pruriens"],
    },
    {
      name: "Serotonin",
      function: "Mood & Sleep",
      description: "Serotonin is a key neurotransmitter that stabilizes our mood, feelings of well-being, and happiness. It impacts your entire body, from your emotions to your motor skills. Serotonin is considered a natural mood stabilizer.",
      symptomsOfImbalance: {
        low: ["Depression", "Anxiety", "Insomnia", "Irritability"],
        high: ["Restlessness", "Confusion", "Rapid heart rate", "Muscle rigidity"],
      },
      optimizers: ["Tryptophan", "Sunlight", "Meditation", "Probiotics"],
      foods: ["Turkey", "Eggs", "Cheese", "Salmon"],
      supplements: ["5-HTP", "Tryptophan"],
    },
    {
      name: "GABA",
      function: "Calm & Relaxation",
      description: "GABA (Gamma-aminobutyric acid) is the primary inhibitory neurotransmitter in the brain, meaning it calms nervous activity. It plays a crucial role in reducing neuronal excitability throughout the nervous system, promoting relaxation, and improving sleep.",
      symptomsOfImbalance: {
        low: ["Anxiety", "Insomnia", "Irritability", "Panic attacks"],
        high: ["Lethargy", "Sedation", "Lack of motivation", "Brain fog"],
      },
      optimizers: ["Magnesium", "Yoga", "Deep breathing", "Green tea"],
      foods: ["Broccoli", "Lentils", "Oats", "Brown rice"],
      supplements: ["GABA", "Theanine", "Magnesium"],
    },
    {
      name: "Acetylcholine",
      function: "Learning & Memory",
      description: "Acetylcholine is a neurotransmitter that plays a crucial role in learning, memory, attention, and muscle contraction. It's vital for cognitive functions and is often associated with brain health and neuroplasticity.",
      symptomsOfImbalance: {
        low: ["Memory impairment", "Difficulty concentrating", "Slowed thinking", "Muscle weakness"],
        high: ["Anxiety", "Depression", "Muscle cramps", "Excessive salivation"],
      },
      optimizers: ["Choline", "Alpha-GPC", "Huperzine A", "Omega-3s"],
      foods: ["Eggs", "Beef liver", "Soybeans", "Broccoli"],
      supplements: ["Alpha-GPC", "Choline Bitartrate", "Huperzine A"],
    },
    {
      name: "Endorphins",
      function: "Pain Relief & Well-being",
      description: "Endorphins are natural painkillers produced by the body in response to stress or pain. They are also associated with feelings of pleasure and euphoria, often referred to as the 'runner's high.'",
      symptomsOfImbalance: {
        low: ["Increased pain sensitivity", "Depression", "Anxiety"],
        high: ["Reduced pain perception", "Euphoria"],
      },
      optimizers: ["Exercise", "Laughter", "Dark chocolate", "Spicy foods"],
      foods: ["Chocolate", "Strawberries", "Ginseng"],
      supplements: ["DL-Phenylalanine (DLPA)", "Ginseng"],
    },
    {
      name: "Oxytocin",
      function: "Bonding & Trust",
      description: "Oxytocin is often called the 'love hormone' or 'cuddle hormone' because it's released during physical touch, social bonding, and intimacy. It plays a crucial role in social recognition, pair bonding, and maternal behaviors.",
      symptomsOfImbalance: {
        low: ["Social anxiety", "Difficulty forming bonds", "Lack of empathy"],
        high: ["Increased anxiety", "Obsessive behaviors"],
      },
      optimizers: ["Physical touch", "Social interaction", "Meditation", "Warm baths"],
      foods: ["Avocado", "Figs", "Watermelon"],
      supplements: ["Magnesium", "Vitamin D"],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Card className="shadow-lg border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Neurochemical Optimization</CardTitle>
          <CardDescription className="text-lg">
            Optimize your brain chemistry for peak mental performance
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {neurochemicals.map((neuro, index) => (
          <Card key={index} className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl">{neuro.name}</CardTitle>
              <CardDescription className="font-semibold">{neuro.function}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{neuro.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Natural Optimizers</h4>
                <div className="flex flex-wrap gap-1">
                  {neuro.optimizers.map((optimizer, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {optimizer}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Food Sources</h4>
                <div className="flex flex-wrap gap-1">
                  {neuro.foods.map((food, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {food}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Supplements</h4>
                <div className="flex flex-wrap gap-1">
                  {neuro.supplements.map((supplement, i) => (
                    <Badge key={i} className="text-xs">
                      {supplement}
                    </Badge>
                  ))}
                </div>
              </div>

              {neuro.symptomsOfImbalance && (
                <div>
                  <h4 className="font-semibold mb-2">Symptoms of Imbalance</h4>
                  {neuro.symptomsOfImbalance.low && (
                    <div>
                      <h5 className="font-medium text-sm mb-1">Low Levels:</h5>
                      <div className="flex flex-wrap gap-1">
                        {neuro.symptomsOfImbalance.low.map((symptom, i) => (
                          <Badge key={i} variant="destructive" className="text-xs">
                            {symptom}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {neuro.symptomsOfImbalance.high && (
                    <div className="mt-2">
                      <h5 className="font-medium text-sm mb-1">High Levels:</h5>
                      <div className="flex flex-wrap gap-1">
                        {neuro.symptomsOfImbalance.high.map((symptom, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {symptom}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}