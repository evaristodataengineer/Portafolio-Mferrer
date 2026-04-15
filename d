[1mdiff --git a/src/index.css b/src/index.css[m
[1mindex f875314..5446f84 100644[m
[1m--- a/src/index.css[m
[1m+++ b/src/index.css[m
[36m@@ -9,25 +9,25 @@[m
     /* Core Colors */[m
     --background: 0 0% 100%;[m
     --foreground: 0 0% 4%;[m
[31m-    [m
[32m+[m
     /* Inverted Section */[m
     --background-inverted: 0 0% 4%;[m
     --foreground-inverted: 0 0% 100%;[m
[31m-    [m
[32m+[m
     /* Accent - Cinematic Gold */[m
     --accent: 51 100% 50%;[m
     --accent-foreground: 0 0% 4%;[m
[31m-    [m
[32m+[m
     /* Muted */[m
     --muted: 0 0% 42%;[m
     --muted-foreground: 0 0% 42%;[m
[31m-    [m
[32m+[m
     /* Cards */[m
     --card: 0 0% 100%;[m
     --card-foreground: 0 0% 4%;[m
     --card-inverted: 0 0% 8%;[m
     --card-inverted-foreground: 0 0% 100%;[m
[31m-    [m
[32m+[m
     /* UI Elements */[m
     --primary: 0 0% 4%;[m
     --primary-foreground: 0 0% 100%;[m
[36m@@ -35,24 +35,24 @@[m
     --secondary-foreground: 0 0% 4%;[m
     --destructive: 0 84% 60%;[m
     --destructive-foreground: 0 0% 100%;[m
[31m-    [m
[32m+[m
     /* Borders & Inputs */[m
     --border: 0 0% 90%;[m
     --border-inverted: 0 0% 20%;[m
     --input: 0 0% 90%;[m
     --ring: 51 100% 50%;[m
[31m-    [m
[32m+[m
     --popover: 0 0% 100%;[m
     --popover-foreground: 0 0% 4%;[m
[31m-    [m
[32m+[m
     --radius: 0.25rem;[m
[31m-    [m
[32m+[m
     /* Shadows */[m
     --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);[m
     --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);[m
     --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);[m
     --shadow-xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);[m
[31m-    [m
[32m+[m
     /* Sidebar (keeping existing) */[m
     --sidebar-background: 0 0% 98%;[m
     --sidebar-foreground: 240 5.3% 26.1%;[m
[36m@@ -91,7 +91,12 @@[m
   }[m
 [m
   /* Typography */[m
[31m-  h1, h2, h3, h4, h5, h6 {[m
[32m+[m[32m  h1,[m
[32m+[m[32m  h2,[m
[32m+[m[32m  h3,[m
[32m+[m[32m  h4,[m
[32m+[m[32m  h5,[m
[32m+[m[32m  h6 {[m
     font-family: 'Space Grotesk', sans-serif;[m
     @apply font-bold tracking-tight;[m
   }[m
[36m@@ -103,11 +108,12 @@[m
 }[m
 [m
 @layer components {[m
[32m+[m
   /* Section styling */[m
   .section-light {[m
     @apply bg-background text-foreground;[m
   }[m
[31m-  [m
[32m+[m
   .section-dark {[m
     @apply bg-background-inverted text-foreground-inverted;[m
   }[m
[36m@@ -117,7 +123,7 @@[m
     @apply text-[200px] md:text-[300px] font-bold opacity-5 absolute -top-10 -left-4 select-none pointer-events-none;[m
     font-family: 'Space Grotesk', sans-serif;[m
   }[m
[31m-  [m
[32m+[m
   .section-number-dark {[m
     @apply text-white opacity-5;[m
   }[m
[36m@@ -138,11 +144,11 @@[m
   .project-card {[m
     @apply relative overflow-hidden cursor-pointer;[m
   }[m
[31m-  [m
[32m+[m
   .project-card-overlay {[m
     @apply absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center;[m
   }[m
[31m-  [m
[32m+[m
   .project-card-image {[m
     @apply w-full h-full object-cover transition-transform duration-700 group-hover:scale-105;[m
   }[m
[36m@@ -156,12 +162,12 @@[m
   .link-underline {[m
     @apply relative inline-block;[m
   }[m
[31m-  [m
[32m+[m
   .link-underline::after {[m
     content: '';[m
     @apply absolute bottom-0 left-0 w-full h-[2px] bg-current transform scale-x-0 origin-left transition-transform duration-300;[m
   }[m
[31m-  [m
[32m+[m
   .link-underline:hover::after {[m
     @apply scale-x-100;[m
   }[m
[36m@@ -176,11 +182,14 @@[m
     @apply fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300;[m
     animation: pulse-whatsapp 2s infinite;[m
   }[m
[31m-  [m
[32m+[m
   @keyframes pulse-whatsapp {[m
[31m-    0%, 100% {[m
[32m+[m
[32m+[m[32m    0%,[m
[32m+[m[32m    100% {[m
       box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);[m
     }[m
[32m+[m
     50% {[m
       box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);[m
     }[m
[36m@@ -201,4 +210,4 @@[m
   .text-balance {[m
     text-wrap: balance;[m
   }[m
[31m-}[m
[32m+[m[32m}[m
\ No newline at end of file[m
