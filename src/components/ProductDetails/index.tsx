import React, { useState } from 'react';
import { Leaf, Droplet, ScrollText, Info } from 'lucide-react';
import { TabContent } from './TabContent';
import { Description } from './Description';
import { Benefits } from './Benefits';
import { HowToUse } from './HowToUse';
import { Ingredients } from './Ingredients';

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('description');

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
              className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              <Info size={24} />
              <span>Description</span>
            </button>
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
            <TabContent isActive={activeTab === 'description'}>
              <Description />
            </TabContent>
            <TabContent isActive={activeTab === 'benefits'}>
              <Benefits />
            </TabContent>
            <TabContent isActive={activeTab === 'howToUse'}>
              <HowToUse />
            </TabContent>
            <TabContent isActive={activeTab === 'ingredients'}>
              <Ingredients />
            </TabContent>
          </div>
        </div>
      </div>
    </section>
  );
}