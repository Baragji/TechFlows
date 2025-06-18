import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies';
import CaseStudyDetail from '@/components/templates/CaseStudyDetail';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | TechFlow Solutions',
    };
  }

  return {
    title: `${caseStudy.title} | TechFlow Solutions`,
    description: caseStudy.shortDescription,
    keywords: `case study, ${caseStudy.category}, ${caseStudy.client}, ${caseStudy.technologies.join(', ')}`,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}