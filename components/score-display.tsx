interface ScoreDisplayProps {
  score: number
}

export function ScoreDisplay({ score }: ScoreDisplayProps) {
  return (
    <div className="border rounded-lg p-6 text-center">
      <h3 className="text-xl font-semibold mb-4">
        Help us understand your goal so we can recommend the right solution
      </h3>
      <div className="text-center">
        <h4 className="text-lg font-medium mb-2">Your Score</h4>
        <div className="w-24 h-24 rounded-full bg-red-500 text-white flex items-center justify-center mx-auto">
          <span className="text-4xl font-bold">{score.toString().padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  )
}

