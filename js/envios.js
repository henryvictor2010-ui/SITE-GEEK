function orderTracker() {
    return {
        searchQuery: '',
        copied: false,
        showSupportModal: false,
        currentOrder: null,

        steps: [
            { label: 'Pedido Realizado' },
            { label: 'Pagamento Confirmado' },
            { label: 'Em Separação' },
            { label: 'Enviado / Trânsito' },
            { label: 'Entregue' }
        ],

        orders: {
            'ANDRENETO': {
                id: '#UG-77412',
                statusKey: 'IN_TRANSIT',
                statusLabel: 'Em Trânsito',
                date: '22/09/2026',
                paymentMethod: 'PIX',
                trackingCode: 'BR987654321BR',
                estimatedDelivery: '28 de Setembro de 2026',
                stepIndex: 3,
                subtotal: 599.89,
                discount: 29.99,
                total: 569.90,
                items: [
                    {
                        id: 1,
                        name: 'Funko Pop - Tony Tony Chopper - One Piece - #2148',
                        tag: 'One Piece',
                        quantity: 1,
                        price: 139.99,
                        image: 'https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dw596e7560/images/funko/upload/1/86517_OP_S12_Chopper_POP_GLAM-1-WEB.png'
                    },
                    {
                        id: 3,
                        name: 'Carta Pokémon - Mega Charizard X e Y Ex - Fogo Fantasmagórico - 125/094',
                        tag: 'Pokémon',
                        quantity: 1,
                        price: 459.90,
                        image: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/ME2PT5/ME2PT5_EN_22.png'
                    }
                ],
                history: [
                    { date: '24/09/2026 10:15', title: 'Em trânsito para a unidade local', description: 'Carga encaminhada para a transportadora regional.', location: 'Belém / PA' },
                    { date: '23/09/2026 16:40', title: 'Objeto postado', description: 'Pedido recebido na unidade de tratamento.', location: 'São Paulo / SP' },
                    { date: '22/09/2026 11:00', title: 'Pagamento aprovado', description: 'Transação PIX confirmada com sucesso.', location: 'Sistema' }
                ]
            },

            '#UG-88421': {
                id: '#UG-88421',
                statusKey: 'PROCESSING',
                statusLabel: 'Em Processamento',
                date: '24/09/2026',
                paymentMethod: 'PIX',
                trackingCode: '',
                estimatedDelivery: '02 de Outubro de 2026',
                stepIndex: 1,
                subtotal: 119.99,
                discount: 6.00,
                total: 113.99,
                items: [
                    {
                        id: 2,
                        name: 'Funko Pop - Doflamingo - One Piece - #2237',
                        tag: 'One Piece',
                        quantity: 1,
                        price: 119.99,
                        image: 'https://cdn.hmv.com/r/w-1280/p-webp/hmv/files/9d/9d270d7e-634b-4ece-914f-88cc3495752f.png'
                    }
                ],
                history: [
                    { date: '24/09/2026 09:20', title: 'Pagamento Confirmado', description: 'Aguardando separação no estoque.', location: 'Centro de Distribuição' },
                    { date: '24/09/2026 09:18', title: 'Pedido Recebido', description: 'Aguardando validação do pagamento.', location: 'Sistema' }
                ]
            },

            '#UG-99201': {
                id: '#UG-99201',
                statusKey: 'IN_TRANSIT',
                statusLabel: 'Em Trânsito',
                date: '20/09/2026',
                paymentMethod: 'Cartão de Crédito',
                trackingCode: 'BR456123789BR',
                estimatedDelivery: '26 de Setembro de 2026',
                stepIndex: 3,
                subtotal: 348.68,
                discount: 0.00,
                total: 348.68,
                items: [
                    {
                        id: 5,
                        name: "Two Freddy Figure's - Five Nights At Freddy's - YouTooz",
                        tag: 'Freddy',
                        quantity: 1,
                        price: 348.68,
                        image: 'https://animeemporium.co.uk/cdn/shop/files/youtooz-five-nights-at-freddy-s-freddy-vinyl-figure-2-the-card-vault-2_1024x_3c9517fd-68fd-4024-8a88-4e3255066e75.png?v=1687189716&width=1946'
                    }
                ],
                history: [
                    { date: '23/09/2026 15:10', title: 'Saiu para entrega', description: 'Objeto saiu para o endereço do destinatário.', location: 'Belém / PA' },
                    { date: '21/09/2026 08:30', title: 'Objeto em trânsito', description: 'Em transferência entre unidades.', location: 'Campinas / SP' }
                ]
            },

            '#UG-55310': {
                id: '#UG-55310',
                statusKey: 'DELIVERED',
                statusLabel: 'Entregue',
                date: '15/09/2026',
                paymentMethod: 'PIX',
                trackingCode: 'BR112233445BR',
                estimatedDelivery: 'Entregue em 18/09/2026',
                stepIndex: 4,
                subtotal: 332.48,
                discount: 16.62,
                total: 315.86,
                items: [
                    {
                        id: 7,
                        name: 'Digital Circus - Jax Pelúcia - Glitch Oficial',
                        tag: 'Digital Circus',
                        quantity: 1,
                        price: 89.60,
                        image: 'https://glitchproductions.store/cdn/shop/files/jax-plush-1.png?v=1762231391&width=1200'
                    },
                    {
                        id: 8,
                        name: 'Pokéball Crossbody Bag - Loungefly - Pokémon Oficial',
                        tag: 'Pokémon',
                        quantity: 1,
                        price: 242.88,
                        image: 'https://loungefly.com/on/demandware.static/-/Sites-funko-master-catalog/default/dwb2b6bc0e/images/loungefly/upload/PMTB0163-LFPOKEMONPOKEBALLCROSSBODY0018.png'
                    }
                ],
                history: [
                    { date: '18/09/2026 16:45', title: 'Entregue', description: 'Entregue ao destinatário ou pessoa autorizada.', location: 'Belém / PA' }
                ]
            },

            '#UG-10022': {
                id: '#UG-10022',
                statusKey: 'CANCELLED',
                statusLabel: 'Cancelado',
                date: '10/09/2026',
                paymentMethod: 'Boleto Bancário',
                trackingCode: '',
                estimatedDelivery: 'N/A',
                stepIndex: 0,
                cancelReason: 'O pedido foi cancelado automaticamente por falta de pagamento do boleto bancário dentro do prazo de vencimento.',
                subtotal: 319.79,
                discount: 0.00,
                total: 319.79,
                items: [
                    {
                        id: 4,
                        name: 'Funko Pop - Aeroplane Ms. Chalice - Cuphead - #899',
                        tag: 'Cuphead',
                        quantity: 1,
                        price: 169.90,
                        image: 'https://funko.com/dw/image/v2/BGTS_PRD/on/demandware.static/-/Sites-funko-master-catalog/default/dw29537dfc/images/funko/61417-2.png?sw=800&sh=800'
                    },
                    {
                        id: 6,
                        name: "Yellow Rabbit Movie Figure - Five Nights At Freddy's - YouTooz",
                        tag: 'Movie',
                        quantity: 1,
                        price: 149.89,
                        image: 'https://pna247.co.uk/cdn/shop/files/01_13.png?v=1718197240'
                    }
                ],
                history: [
                    { date: '12/09/2026 00:00', title: 'Pedido Cancelado', description: 'Prazo de pagamento expirado.', location: 'Sistema' }
                ]
            }
        },

        init() {
            this.loadOrder('ANDRENETO');
        },

        loadOrder(code) {
            const foundKey = Object.keys(this.orders).find(
                key => key.toUpperCase() === code.toUpperCase() || 
                       this.orders[key].trackingCode.toUpperCase() === code.toUpperCase()
            );

            if (foundKey) {
                this.currentOrder = this.orders[foundKey];
                this.searchQuery = code;
            } else {
                this.currentOrder = null;
            }
        },

        searchOrder() {
            if (!this.searchQuery.trim()) return;
            this.loadOrder(this.searchQuery.trim());
        },

        copyTrackingCode(code) {
            if (!code) return;
            navigator.clipboard.writeText(code);
            this.copied = true;
            setTimeout(() => { this.copied = false; }, 2000);
        },

        getProgressPercentage() {
            if (!this.currentOrder) return 0;
            return (this.currentOrder.stepIndex / (this.steps.length - 1)) * 100;
        },

        getStatusBadgeClass(key) {
            switch (key) {
                case 'IN_TRANSIT':
                    return 'bg-blue-100 text-blue-800 border border-blue-200';
                case 'PROCESSING':
                    return 'bg-amber-100 text-amber-800 border border-amber-200';
                case 'DELIVERED':
                    return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
                case 'CANCELLED':
                    return 'bg-rose-100 text-rose-800 border border-rose-200';
                default:
                    return 'bg-gray-100 text-gray-800 border border-gray-200';
            }
        }
    };
}

 tailwind.config = {
           theme: {
               extend: {
                   colors: {
                       geek: {
                           bg: '#F5EFE6',         /* Warm cream background from screenshot */
                           card: '#FFFFFF',       /* Card background */
                           navBg: '#E8DEC9',      /* Nav category background */
                           primary: '#934B26',    /* Warm brown button/accent */
                           primaryHover: '#793B1C',
                           darkBrown: '#5A2E16',
                           bar: '#A8572A',       /* Announcement top bar */
                           badge: '#B25A2B',      /* Card tag badges */
                           border: '#E3D3C1'
                       }
                   },
                   fontFamily: {
                       sans: ['Inter', 'sans-serif']
                   }
               }
           }
       }