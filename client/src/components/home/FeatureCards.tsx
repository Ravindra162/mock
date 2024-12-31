import React from 'react';
import { Brain, Target, Clock } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'Questions adapt to your skill level for optimal learning progress.',
  },
  {
    icon: Target,
    title: 'Focused Practice',
    description: 'Target specific skills with our comprehensive question bank.',
  },
  {
    icon: Clock,
    title: 'Real-time Tracking',
    description: 'Monitor your progress with detailed analytics and insights.',
  },
];

export function FeatureCards() {
  return (
    <div className="mt-16 md:mt-20 grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}