function Homepage() {
  return (
    <div 
      style={{
        margin: 0, 
        padding: 0, 
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
        backgroundColor: '#f4f7f6', 
        color: '#333', 
        lineHeight: 1.6,
        minHeight: '100vh'
      }}
    >
      {/* Navigation Bar */}
      <nav 
        style={{
          backgroundColor: '#2c3e50', 
          padding: '15px 30px', 
          display: 'flex', 
        //   justifyContent: spaceBetween, 
          alignItems: 'center', 
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold', letterSpacing: '1px' }}>
          MyWebsite
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Home</a>
          <a href="#" style={{ color: '#bdc3c7', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>About</a>
          <a href="#" style={{ color: '#bdc3c7', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Services</a>
          <a href="#" style={{ color: '#bdc3c7', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header 
        style={{
          background: 'linear-gradient(135deg, #3498db, #2c3e50)', 
          color: '#ffffff', 
          textAlign: 'center', 
          padding: '100px 20px', 
          boxSizing: 'border-box'
        }}
      >
        <h1 style={{ margin: '0 0 20px 0', fontSize: '48px', fontWeight: 700 }}>
          Welcome to Your Next Chapter
        </h1>
        <p style={{ margin: '0 0 30px 0', fontSize: '20px', color: '#ecf0f1', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          A clean, responsive, and completely inline-styled homepage template ready for your personal touch.
        </p>
        <a 
          href="#" 
          style={{
            display: 'inline-block', 
            backgroundColor: '#e74c3c', 
            color: '#ffffff', 
            textDecoration: 'none', 
            padding: '12px 30px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            borderRadius: '25px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.15)'
          }}
        >
          Get Started Today
        </a>
      </header>

      {/* Main Content Section */}
      <main style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px', boxSizing: 'border-box' }}>
        
        {/* Features Grid */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
            
          {/* Feature 1 */}
          <div 
            style={{
              backgroundColor: '#ffffff', 
              borderRadius: '8px', 
              padding: '30px', 
              flex: 1, 
              minWidth: '280px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)', 
              textAlign: 'center', 
              borderTop: '5px solid #3498db'
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎨</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50', fontSize: '22px' }}>Modern Design</h3>
            <p style={{ margin: 0, color: '#7f8c8d', fontSize: '15px' }}>
              Clean typographic scales and carefully selected colors that look stunning on any screen resolution.
            </p>
          </div>

          {/* Feature 2 */}
          <div 
            style={{
              backgroundColor: '#ffffff', 
              borderRadius: '8px', 
              padding: '30px', 
              flex: 1, 
              minWidth: '280px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)', 
              textAlign: 'center', 
              borderTop: '5px solid #e74c3c'
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚡</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50', fontSize: '22px' }}>Fast Performance</h3>
            <p style={{ margin: 0, color: '#7f8c8d', fontSize: '15px' }}>
              Zero external styling stylesheets or heavy frameworks. Pure, semantic layout structure for light load times.
            </p>
          </div>

          {/* Feature 3 */}
          <div 
            style={{
              backgroundColor: '#ffffff', 
              borderRadius: '8px', 
              padding: '30px', 
              flex: 1, 
              minWidth: '280px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)', 
              textAlign: 'center', 
              borderTop: '5px solid #2ecc71'
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>📱</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50', fontSize: '22px' }}>Fully Responsive</h3>
            <p style={{ margin: 0, color: '#7f8c8d', fontSize: '15px' }}>
              Utilizes flexible flexbox grids to ensure the elements seamlessly adjust for mobile layout environments.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer 
        style={{
          backgroundColor: '#2c3e50',
          color: '#bdc3c7', 
          textAlign: 'center', 
          padding: '25px 20px',
          fontSize: '14px', 
          borderTop: '1px solid #34495e'
        }}
      >
        <p style={{ margin: 0 }}>&copy; 2026 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Homepage