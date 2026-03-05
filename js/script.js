        (function() {
            'use strict';
            
            // ===========================================
            // MENÚ MÓVIL - VERSIÓN DEFINITIVA CORREGIDA
            // ===========================================
            
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileNav = document.getElementById('mobileNav');
            const mobileOverlay = document.getElementById('mobileOverlay');
            const mobileServiciosToggle = document.getElementById('mobileServiciosToggle');
            const mobileServiciosMenu = document.getElementById('mobileServiciosMenu');
            
            let menuAbierto = false;
            
            function abrirMenu() {
                menuAbierto = true;
                mobileNav.classList.add('active');
                mobileOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            function cerrarMenu() {
                menuAbierto = false;
                mobileNav.classList.remove('active');
                mobileOverlay.classList.remove('active');
                mobileServiciosMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Botón hamburguesa
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (menuAbierto) {
                        cerrarMenu();
                    } else {
                        abrirMenu();
                    }
                });
            }
            
            // Overlay (fondo oscuro)
            if (mobileOverlay) {
                mobileOverlay.addEventListener('click', function(e) {
                    e.stopPropagation();
                    cerrarMenu();
                });
            }
            
            // Toggle dropdown servicios DENTRO del menú
            if (mobileServiciosToggle) {
                mobileServiciosToggle.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    mobileServiciosMenu.classList.toggle('active');
                });
            }
            
            // Prevenir cierre al hacer clic dentro del menú
            if (mobileNav) {
                mobileNav.addEventListener('click', function(e) {
                    e.stopPropagation();
                });
            }
            
            // Cerrar al hacer clic en enlaces
            const enlaces = document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-item');
            enlaces.forEach(function(link) {
                link.addEventListener('click', function() {
                    cerrarMenu();
                });
            });
            
            // Cerrar con ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && menuAbierto) {
                    cerrarMenu();
                }
            });
            
            // Cerrar al cambiar orientación
            window.addEventListener('orientationchange', function() {
                if (menuAbierto) {
                    cerrarMenu();
                }
            });
            
            // Cerrar si viewport se agranda
            let anchoAnterior = window.innerWidth;
            window.addEventListener('resize', function() {
                const anchoActual = window.innerWidth;
                if (anchoAnterior <= 768 && anchoActual > 768 && menuAbierto) {
                    cerrarMenu();
                }
                anchoAnterior = anchoActual;
            });
            
        })();
        
        // ===========================================
        // HEADER SCROLL EFFECT
        // ===========================================
        
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            const floatingCta = document.getElementById('floatingCta');
            
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
                floatingCta.classList.add('visible');
            } else {
                header.classList.remove('scrolled');
                floatingCta.classList.remove('visible');
            }
        });

        // ===========================================
        // FADE-IN ANIMATION
        // ===========================================
        
        const fadeElements = document.querySelectorAll('.fade-in');
        
        function fadeInOnScroll() {
            fadeElements.forEach(function(element) {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                
                if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                    element.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', fadeInOnScroll);
        window.addEventListener('load', fadeInOnScroll);

        // ===========================================
        // FAQ ACCORDION
        // ===========================================
        
        document.querySelectorAll('.faq-question').forEach(function(question) {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                document.querySelectorAll('.faq-item').forEach(function(item) {
                    item.classList.remove('active');
                });
                
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });

        // ===========================================
        // SMOOTH SCROLL
        // ===========================================
        
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });