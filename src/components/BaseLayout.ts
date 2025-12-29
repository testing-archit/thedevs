// Base Layout Component - HTML Shell with HTMX & Alpine
interface LayoutProps {
    title: string;
    description: string;
    content: string;
}

export function BaseLayout({ title, description, content }: LayoutProps): string {
    return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    
    <!-- TailwindCSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#E91E8C',
                        secondary: '#F5A623',
                        dark: '#0A0A0A',
                        'dark-card': '#141414',
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                },
            },
        }
    </script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- HTMX - The H in BETH -->
    <script src="https://unpkg.com/htmx.org@1.9.10"></script>
    
    <!-- Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #0A0A0A; }
        .gradient-text {
            background: linear-gradient(135deg, #E91E8C 0%, #F5A623 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .glass-card {
            background: rgba(20, 20, 20, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow-pink { box-shadow: 0 0 60px rgba(233, 30, 140, 0.3); }
        .glow-gold { box-shadow: 0 0 60px rgba(245, 166, 35, 0.3); }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .float-animation { animation: float 4s ease-in-out infinite; }
    </style>
</head>
<body class="bg-dark text-white antialiased" x-data="{ mobileMenuOpen: false }">
    ${content}
</body>
</html>`;
}
