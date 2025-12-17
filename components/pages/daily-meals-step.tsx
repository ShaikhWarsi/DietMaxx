import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface DailyMealsStepProps {
  formData: {
    breakfast: string;
    lunch: string;
    dinner: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string, name: keyof FormData) => void;
}

export function DailyMealsStep({ formData, handleInputChange }: DailyMealsStepProps) {
  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Daily Meals</CardTitle>
        <CardDescription className="">Describe what you typically eat for each meal</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="breakfast" className="text-gray-700">
            Breakfast
          </Label>
          <Textarea
            id="breakfast"
            value={formData.breakfast}
            onChange={(e) => handleInputChange(e, "breakfast")}
            className="min-h-[80px] border border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Describe your typical breakfast..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lunch">
            Lunch
          </Label>
          <Textarea
            id="lunch"
            value={formData.lunch}
            onChange={(e) => handleInputChange(e, "lunch")}
            className="min-h-[80px] border border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Describe your typical lunch..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dinner" className="text-gray-700">
            Dinner
          </Label>
          <Textarea
            id="dinner"
            value={formData.dinner}
            onChange={(e) => handleInputChange(e, "dinner")}
            className="min-h-[80px] border border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Describe your typical dinner..."
          />
        </div>
      </CardContent>
    </Card>
  );
}