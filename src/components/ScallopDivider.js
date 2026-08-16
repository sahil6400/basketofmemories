export default function ScallopDivider({ color = "#FBF3EA", flip = false, className = "" }) {
  return (
    <div className={`scallop-edge ${flip ? "scallop-up" : "scallop-down"} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
        width="100%"
        height="22"
        style={{ display: "block" }}
      >
        <path
          d="M0,0 
             C 5,20 15,20 20,0 
             C 25,20 35,20 40,0 
             C 45,20 55,20 60,0 
             C 65,20 75,20 80,0 
             C 85,20 95,20 100,0 
             C 105,20 115,20 120,0 
             C 125,20 135,20 140,0 
             C 145,20 155,20 160,0 
             C 165,20 175,20 180,0 
             C 185,20 195,20 200,0 
             L200,0 L0,0 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
