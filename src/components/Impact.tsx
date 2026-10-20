import { useSiteNumbers } from '../lib/numbers'
import { MetricCounter } from './MetricCounter'
import { Section } from './Section'

export function Impact() {
  const { metrics } = useSiteNumbers()
  return (
    <Section
      id="impact"
      eyebrow="Impact at a glance"
      title="Evidence of work that reached the field."
      description="Verified starting points from AMR deployments, customer-site PoCs, and operational improvement. Measurement methodology for the deployment-time figure should be confirmed before publication."
    >
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {metrics.map((metric) => (
          <MetricCounter key={metric.id} metric={metric} />
        ))}
      </div>
    </Section>
  )
}
