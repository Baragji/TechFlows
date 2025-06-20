'use client';

import { SSRSafeMotion } from '@/components/ui/SSRSafeMotion';
import { LightBulbIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

interface AIIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: 'høj' | 'medium' | 'lav';
  complexity: 'simpel' | 'medium' | 'kompleks';
}

// Mock data - i produktion ville dette komme fra en API eller JSON fil
const mockIdeas: AIIdea[] = [
  {
    id: '1',
    title: 'AI-Powered Chatbots',
    description:
      'Intelligente chatbots der kan håndtere kundeservice 24/7 med naturlig sprogforståelse',
    category: 'Kundeservice',
    impact: 'høj',
    complexity: 'medium',
  },
  {
    id: '2',
    title: 'Predictive Analytics Dashboard',
    description: 'Forudsig salgsdata og kundeadfærd med machine learning algoritmer',
    category: 'Business Intelligence',
    impact: 'høj',
    complexity: 'kompleks',
  },
  {
    id: '3',
    title: 'Automated Content Generation',
    description: 'Generer automatisk produktbeskrivelser og marketing content med AI',
    category: 'Marketing',
    impact: 'medium',
    complexity: 'medium',
  },
  {
    id: '4',
    title: 'Smart Inventory Management',
    description: 'Optimer lagerføring med AI-baserede forudsigelser af efterspørgsel',
    category: 'Logistik',
    impact: 'høj',
    complexity: 'kompleks',
  },
  {
    id: '5',
    title: 'Voice-Activated Interfaces',
    description: 'Implementer stemmebaseret navigation og kommandoer i dine apps',
    category: 'User Experience',
    impact: 'medium',
    complexity: 'medium',
  },
  {
    id: '6',
    title: 'Automated Testing Suite',
    description: 'AI-drevet automatisk testing der finder bugs før de når produktion',
    category: 'Udvikling',
    impact: 'medium',
    complexity: 'simpel',
  },
];

const getImpactColor = (impact: string) => {
  switch (impact.toLowerCase()) {
    case 'høj':
      return 'bg-accent-green/20 text-accent-green border border-accent-green/30';
    case 'medium':
      return 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30';
    case 'lav':
      return 'bg-white/10 text-white/70 border border-white/20';
    default:
      return 'bg-white/10 text-white border border-white/20';
  }
};

const getComplexityColor = (complexity: string) => {
  switch (complexity.toLowerCase()) {
    case 'simpel':
      return 'bg-accent-green/20 text-accent-green border border-accent-green/30';
    case 'medium':
      return 'bg-accent-orange/20 text-accent-orange border border-accent-orange/30';
    case 'kompleks':
      return 'bg-red-500/20 text-red-400 border border-red-500/30';
    default:
      return 'bg-white/10 text-white border border-white/20';
  }
};

const AIIdeas = () => {
  const [ideas, setIdeas] = useState<AIIdea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler API kald
    const loadIdeas = async () => {
      setLoading(true);
      // Simuler loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIdeas(mockIdeas);
      setLoading(false);
    };

    loadIdeas();
  }, []);

  return (
    <section id="ideas" className="py-20 bg-obsidian-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SSRSafeMotion
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <SparklesIcon className="w-8 h-8 text-accent-blue mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              AI-Genererede Teknologi Idéer
            </h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Lad dig inspirere af de nyeste trends og muligheder inden for teknologi
          </p>
        </SSRSafeMotion>

        {/* Ideas Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xs rounded-2xl p-6 border border-white/10 animate-pulse"
              >
                <div className="h-4 bg-white/20 rounded mb-4" />
                <div className="h-3 bg-white/20 rounded mb-2" />
                <div className="h-3 bg-white/20 rounded mb-4" />
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-white/20 rounded-full" />
                  <div className="h-6 w-16 bg-white/20 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ideas.map((idea, index) => (
              <SSRSafeMotion
                key={idea.id}
                className="bg-white/5 backdrop-blur-xs rounded-2xl p-6 border border-white/10 hover:border-accent-blue/30 hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <LightBulbIcon className="w-6 h-6 text-white" />
                  </div>
                  <RocketLaunchIcon className="w-5 h-5 text-white/60 group-hover:text-accent-blue transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{idea.title}</h3>

                <p className="text-white/70 leading-relaxed mb-4">{idea.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getImpactColor(idea.impact)}`}
                  >
                    Impact: {idea.impact}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(idea.complexity)}`}
                  >
                    {idea.complexity}
                  </span>
                </div>

                <div className="text-sm text-text-light font-medium">{idea.category}</div>
              </SSRSafeMotion>
            ))}
          </div>
        )}

        {/* CTA */}
        <SSRSafeMotion
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-text-light mb-6">Har du en idé du gerne vil realisere?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:from-primary/80 hover:to-accent/80 transition-all duration-300 shadow-custom hover:shadow-custom-lg"
          >
            Lad os tale om det
            <SparklesIcon className="w-5 h-5 ml-2" />
          </a>
        </SSRSafeMotion>
      </div>
    </section>
  );
};

export default AIIdeas;
