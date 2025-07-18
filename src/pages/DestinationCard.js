const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <div className="card-content">
        <h3>{destination.name}</h3>
        <p>{destination.location}</p>
        {destination.centerName && <p><strong>Center:</strong> {destination.centerName}</p>}
        {destination.disasterType && <p><strong>Disaster:</strong> {destination.disasterType}</p>}
        {destination.resourcesAvailable && <p><strong>Resources:</strong> {destination.resourcesAvailable}</p>}
        {destination.contact && <p><strong>Contact:</strong> {destination.contact}</p>}
        <Link to={`/destinations/${destination.id}`} className="view-link">View More</Link>
      </div>
    </div>
  );
};
