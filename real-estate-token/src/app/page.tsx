import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css";
import { properties } from "@/data/mockData";
import { MapPin, TrendingUp, Building2 } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Building2 size={28} />
          <span>EstateToken</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#">Marketplace</a>
          <a href="#">Portfolio</a>
          <a href="#">Learn</a>
        </div>
        <button className={styles.connectBtn}>Connect Wallet</button>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <h1>Invest in Real Estate</h1>
        <p>Own fractional shares of high-yield rental properties starting at just $50.</p>
        <div className={styles.ctaButtons}>
          <a href="#market" className={styles.primaryBtn}>View Properties</a>
        </div>
      </header>

      {/* Marketplace */}
      <main id="market" className={styles.main}>
        <div className={styles.sectionHeader}>
          <h2>Featured Properties</h2>
        </div>

        <div className={styles.grid}>
          {properties.map((property) => (
            // We wrap the whole card in a Link to make it clickable
            <Link 
              href={`/property/${property.id}`} 
              key={property.id} 
              style={{textDecoration: 'none', color: 'inherit'}}
            >
              <div className={styles.card}>
                {/* Image Section */}
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className={styles.cardImage} 
                />
                
                {/* Content Section */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{property.title}</h3>
                  <div className={styles.cardLocation}>
                    <MapPin size={16} />
                    {property.location}
                  </div>

                  <div className={styles.stats}>
                    <div>
                      <span className={styles.statLabel}>Price / Token</span>
                      <span className={styles.statValue}>${property.pricePerToken}</span>
                    </div>
                    <div>
                      <span className={styles.statLabel}>Expected APY</span>
                      <span className={`${styles.statValue} ${styles.green}`}>
                        <TrendingUp size={14} style={{display: 'inline', marginRight: '4px'}}/>
                        {property.apy}%
                      </span>
                    </div>
                  </div>

                  {/* We use a div styled as a button because you can't put a <button> inside a Link */}
                  <div className={styles.buyBtn} style={{textAlign: 'center'}}>
                    View Details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}