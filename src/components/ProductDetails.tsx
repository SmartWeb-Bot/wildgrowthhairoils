import React, { useState } from 'react';
import { Leaf, Droplet, ScrollText } from 'lucide-react';

interface TabContentProps {
  isActive: boolean;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ isActive, children }) => (
  <div className={`tab-content ${isActive ? 'active' : ''}`}>
    {children}
  </div>
);

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('benefits');

  return (
    <section className="product-details" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Our Oil?</h2>
          <p className="section-description">
            Discover the science and nature behind our premium hair growth formula
          </p>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              <Leaf size={24} />
              <span>Benefits</span>
            </button>
            <button
              className={`tab-button ${activeTab === 'howToUse' ? 'active' : ''}`}
              onClick={() => setActiveTab('howToUse')}
            >
              <Droplet size={24} />
              <span>How to Use</span>
            </button>
            <button
              className={`tab-button ${activeTab === 'ingredients' ? 'active' : ''}`}
              onClick={() => setActiveTab('ingredients')}
            >
              <ScrollText size={24} />
              <span>Ingredients</span>
            </button>
          </div>

          <div className="tabs-content">
            <TabContent isActive={activeTab === 'benefits'}>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <h3>Promotes Hair Growth</h3>
                  <p>Stimulates follicles and increases blood circulation to promote faster, healthier hair growth.</p>
                </div>
                <div className="benefit-item">
                  <h3>Strengthens Hair</h3>
                  <p>Nourishes from root to tip, reducing breakage and split ends while improving overall hair strength.</p>
                </div>
                <div className="benefit-item">
                  <h3>Prevents Hair Loss</h3>
                  <p>Natural ingredients work together to reduce hair fall and maintain healthy scalp conditions.</p>
                </div>
                <div className="benefit-item">
                  <h3>Adds Shine</h3>
                  <p>Natural oils provide deep conditioning, leaving your hair glossy and manageable.</p>
                </div>
              </div>
            </TabContent>

            <TabContent isActive={activeTab === 'howToUse'}>
              <div className="usage-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h3>Apply to Scalp</h3>
                  <p>Part your hair and apply 3-5 drops directly to the scalp in sections.</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h3>Gentle Massage</h3>
                  <p>Using fingertips, massage the oil into your scalp for 5-10 minutes.</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h3>Leave In</h3>
                  <p>Leave the oil in for at least 30 minutes or overnight for best results.</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h3>Wash</h3>
                  <p>Wash hair with a gentle shampoo and condition as usual.</p>
                </div>
              </div>
            </TabContent>

            <TabContent isActive={activeTab === 'ingredients'}>
              <div className="ingredients-list">
                <div className="ingredient">
                  <h3>Castor Oil</h3>
                  <p>Rich in ricinoleic acid, omega-6 fatty acids, and vitamin E. Promotes hair growth and reduces scalp inflammation.</p>
                </div>
                <div className="ingredient">
                  <h3>Rosemary Oil</h3>
                  <p>Stimulates hair growth and improves cellular generation. Natural antioxidant properties.</p>
                </div>
                <div className="ingredient">
                  <h3>Argan Oil</h3>
                  <p>Contains vitamin E and fatty acids. Moisturizes hair and reduces frizz and damage.</p>
                </div>
                <div className="ingredient">
                  <h3>Jojoba Oil</h3>
                  <p>Similar to natural scalp oils. Balances oil production and nourishes follicles.</p>
                </div>
                <div className="ingredient">
                  <h3>Peppermint Oil</h3>
                  <p>Increases circulation to the scalp and provides a cooling, refreshing sensation.</p>
                </div>
                <div className="ingredient">
                  <h3>Lavender Oil</h3>
                  <p>Antimicrobial properties that maintain scalp health. Promotes hair growth and provides calming aroma.</p>
                </div>
              </div>
            </TabContent>
          </div>
        </div>
      </div>
    </section>
  );
}