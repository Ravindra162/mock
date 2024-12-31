import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute -top-4 left-4 bg-indigo-600 rounded-full p-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-8 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
}