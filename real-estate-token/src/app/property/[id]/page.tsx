import styles from "../Property.module.css";
import { properties } from "@/data/mockData";
import { MapPin, ArrowLeft, TrendingUp, Home } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// This function runs on the server to catch the [id] from the URL
export default function PropertyPage({ params }: { params: { id: string } }) {
  // 1. Find the property in our mock data
  const property = properties.find((p) => p.id === params.id);

  // 2. If ID doesn't exist (e.g., /property/999), show 404
  if (!property) {
    return notFound();
  }

  // 3. Calculate percentage sold
  const percentSold = (property.tokensSold / property.totalTokens) * 100;

  return (
    <div className={styles.container}>
      {/* Back Button */}
      <Link href="/" className={styles.backLink}>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <ArrowLeft size={20} /> Back to Marketplace
        </div>
      </Link>

      <div className={styles.grid}>
        {/* LEFT COLUMN: Info */}
        <div className={styles.leftColumn}>
          <img 
            src={property.image} 
            alt={property.title} 
            className={styles.mainImage} 
          />
          
          <h1 className={styles.title}>{property.title}</h1>
          <div className={styles.location}>
            <MapPin size={20} />
            {property.location}
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Expected Yield (APY)</span>
              <span className={styles.statValue} style={{color: '#16a34a'}}>
                {property.apy}%
              </span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Asset Type</span>
              <span className={styles.statValue}>Residential</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Min Investment</span>
              <span className={styles.statValue}>${property.minInvestment}</span>
            </div>
          </div>

          <div className={styles.description}>
             <h3>About this Asset</h3>
             <p style={{lineHeight: '1.6', color: '#475569'}}>
                 This property represents a premium investment opportunity in {property.location}.
                 By holding this token, you legally own a share of the Special Purpose Vehicle (LLC)
                 that holds the deed. Rent is distributed to your wallet every Monday.
             </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Buy Panel */}
        <div className={styles.buyPanel}>
            <div className={styles.panelHeader}>
                <div className={styles.priceTag}>${property.pricePerToken}</div>
                <div className={styles.subPrice}>per token</div>
            </div>

            <div style={{marginBottom: '1rem'}}>
                <strong>Sales Progress</strong>
                <div className={styles.progressBarContainer}>
                    <div 
                        className={styles.progressBarFill} 
                        style={{width: `${percentSold}%`}}
                    ></div>
                </div>
                <div className={styles.progressText}>
                    <span>{property.tokensSold} sold</span>
                    <span>{property.totalTokens} total</span>
                </div>
            </div>

            <button className={styles.buyBtn}>
                Buy Tokens Now
            </button>
            
            <p style={{marginTop: '1rem', fontSize: '0.8rem', color: '#94a3b8', textAlign: 'center'}}>
                Powered by Blockchain • Secured by Real Estate
            </p>
        </div>
      </div>
    </div>
  );
}