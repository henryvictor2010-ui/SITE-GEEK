 
        function orderTracker() {
            return {
                searchQuery: '',
                copied: false,
                showSupportModal: false,

                // Standard shipping steps
                steps: [
                    { label: 'Pedido Realizado' },
                    { label: 'Pagamento Confirmado' },
                    { label: 'Em Preparação' },
                    { label: 'Enviado' },
                    { label: 'Em Rota' },
                    { label: 'Entregue' }
                ],

                orders: {
                    'ANDRENETO': {
                        id: '#UG-77700',
                        statusKey: 'SHIPPED',
                        statusLabel: 'Enviado em Trânsito',
                        date: '21/09/2026 às 08:30',
                        paymentMethod: 'Pix com 5% de Desconto',
                        trackingCode: 'ANDRENETO',
                        estimatedDelivery: '24/09/2026',
                        stepIndex: 3, // Enviado
                        subtotal: 139.99,
                        discount: 7.00,
                        total: 132.99,
                        items: [
                            {
                                id: 1,
                                name: 'Funko Pop - Tony Tony Chopper - One Piece - #2148',
                                price: 139.99,
                                quantity: 1,
                                tag: 'Últimas Unidades',
                                image: 'https://placehold.co/200x200/F5EFE6/934B26?text=Chopper+Funko'
                            }
                        ],
                        history: [
                            {
                                date: '21/09/2026 - 15:20',
                                title: 'Objeto em Trânsito',
                                description: 'A encomenda está a caminho do centro de distribuição local para entrega final.',
                                location: 'Centro Logístico - São Paulo/SP'
                            },
                            {
                                date: '21/09/2026 - 11:00',
                                title: 'Coletado pela Transportadora',
                                description: 'O pacote foi despachado sob o código de rastreio prioritário ANDRENETO.',
                                location: 'CD Universal Geek - São Paulo/SP'
                            },
                            {
                                date: '21/09/2026 - 09:00',
                                title: 'Pedido Embalado e Nota Fiscal Emitida',
                                description: 'Colecionável embalado com proteção reforçada de plástico bolha.',
                                location: 'Estoque Universal Geek'
                            },
                            {
                                date: '21/09/2026 - 08:30',
                                title: 'Pagamento Aprovado via Pix',
                                description: 'Desconto exclusivo de 5% aplicado.',
                                location: 'Sistema Automático'
                            }
                        ]
                    },

                    '#UG-88421': {
                        id: '#UG-88421',
                        statusKey: 'PROCESSING',
                        statusLabel: 'Em Processamento',
                        date: '20/09/2026 às 14:32',
                        paymentMethod: 'Pix com 5% de Desconto',
                        trackingCode: 'BR884210922UG',
                        estimatedDelivery: '25/09/2026 a 28/09/2026',
                        stepIndex: 2, // Em Preparação
                        subtotal: 139.99,
                        discount: 7.00,
                        total: 132.99,
                        items: [
                            {
                                id: 1,
                                name: 'Funko Pop - Tony Tony Chopper - One Piece - #2148',
                                price: 139.99,
                                quantity: 1,
                                tag: 'Últimas Unidades',
                                image: 'https://placehold.co/200x200/F5EFE6/934B26?text=Chopper+Funko'
                            }
                        ],
                        history: [
                            {
                                date: '21/09/2026 - 09:15',
                                title: 'Em Separação no Estoque',
                                description: 'O item foi reservado e está sendo embalado com proteção reforçada para envio.',
                                location: 'Centro de Distribuição - São Paulo/SP'
                            },
                            {
                                date: '20/09/2026 - 14:35',
                                title: 'Pagamento via Pix Confirmado',
                                description: 'O pagamento foi aprovado instantaneamente. Desconto de 5% aplicado com sucesso.',
                                location: 'Sistema Automático'
                            },
                            {
                                date: '20/09/2026 - 14:32',
                                title: 'Pedido Recebido',
                                description: 'Aguardando aprovação do pagamento.',
                                location: 'Loja Online Universal Geek'
                            }
                        ]
                    },

                    '#UG-99201': {
                        id: '#UG-99201',
                        statusKey: 'SHIPPED',
                        statusLabel: 'Em Trânsito',
                        date: '18/09/2026 às 10:10',
                        paymentMethod: 'Pix com 5% de Desconto',
                        trackingCode: 'BR992015822UG',
                        estimatedDelivery: '22/09/2026',
                        stepIndex: 4, // Em Rota
                        subtotal: 459.90,
                        discount: 22.99,
                        total: 436.91,
                        items: [
                            {
                                id: 2,
                                name: 'Carta Pokémon - Mega Charizard X e Y Ex - Fogo Fantasmagórico',
                                price: 459.90,
                                quantity: 1,
                                tag: 'Oferta Única',
                                image: 'https://placehold.co/200x200/F5EFE6/934B26?text=Charizard+Ex'
                            }
                        ],
                        history: [
                            {
                                date: '21/09/2026 - 07:40',
                                title: 'Saiu para entrega ao destinatário',
                                description: 'O entregador já está com sua encomenda a caminho da residência.',
                                location: 'Unidade de Entrega - Belém/PA'
                            },
                            {
                                date: '20/09/2026 - 18:20',
                                title: 'Em trânsito para a unidade local',
                                description: 'Objeto encaminhado para o centro logístico regional.',
                                location: 'Centro Logístico - Curitiba/PR'
                            },
                            {
                                date: '19/09/2026 - 11:00',
                                title: 'Objeto postado e encaminhado',
                                description: 'Coleta realizada pela transportadora parceira.',
                                location: 'São Paulo/SP'
                            },
                            {
                                date: '18/09/2026 - 10:10',
                                title: 'Pedido Confirmado e Faturado',
                                description: 'Nota fiscal emitida com sucesso.',
                                location: 'Universal Geek'
                            }
                        ]
                    },

                    '#UG-55310': {
                        id: '#UG-55310',
                        statusKey: 'DELIVERED',
                        statusLabel: 'Entregue',
                        date: '12/09/2026 às 16:45',
                        paymentMethod: 'Cartão de Crédito',
                        trackingCode: 'BR553109911UG',
                        estimatedDelivery: '15/09/2026 (Entregue no prazo)',
                        stepIndex: 5, // Entregue
                        subtotal: 289.89,
                        discount: 0.00,
                        total: 289.89,
                        items: [
                            {
                                id: 3,
                                name: 'Funko Pop - Doflamingo - One Piece - #2237',
                                price: 119.99,
                                quantity: 1,
                                tag: 'Em estoque',
                                image: 'https://placehold.co/200x200/F5EFE6/934B26?text=Doflamingo'
                            },
                            {
                                id: 4,
                                name: 'Funko Pop - Aeroplane Ms. Chalice - Cuphead - #899',
                                price: 169.90,
                                quantity: 1,
                                tag: 'Mais Vendidos',
                                image: 'https://placehold.co/200x200/F5EFE6/934B26?text=Ms+Chalice'
                            }
                        ],
                        history: [
                            {
                                date: '15/09/2026 - 14:10',
                                title: 'Entregue ao Destinatário',
                                description: 'Recebido por: Carlos Silva (Portaria/Recebedor).',
                                location: 'Belém/PA'
                            },
                            {
                                date: '15/09/2026 - 08:30',
                                title: 'Saiu para entrega ao destinatário',
                                description: 'Motorista em rota.',
                                location: 'Unidade de Entrega - Belém/PA'
                            },
                            {
                                date: '13/09/2026 - 10:00',
                                title: 'Objeto Postado',
                                description: 'Encaminhado para a transportadora.',
                                location: 'São Paulo/SP'
                            }
                        ]
                    },

                    '#UG-10022': {
                        id: '#UG-10022',
                        statusKey: 'CANCELLED',
                        statusLabel: 'Cancelado',
                        date: '05/09/2026 às 11:20',
                        paymentMethod: 'Pix',
                        trackingCode: null,
                        estimatedDelivery: 'Cancelado',
                        stepIndex: 0,
                        cancelReason: 'O pedido foi cancelado devido a uma solicitação do cliente antes do envio. O reembolso via PIX foi realizado com sucesso.',
                        subtotal: 139.99,
                        discount: 7.00,
                        total: 132.99,
                        items: [
                            {
                                id: 1,
                                name: 'Funko Pop - Tony Tony Chopper - One Piece - #2148',
                                price: 139.99,
                                quantity: 1,
                                tag: 'Últimas Unidades',
                                image: 'https://placehold.co/200x200/F5EFE6/934B26?text=Chopper+Funko'
                            }
                        ],
                        history: [
                            {
                                date: '05/09/2026 - 12:00',
                                title: 'Estorno do Pagamento Concluído',
                                description: 'Valor de R$ 132,99 devolvido para a chave PIX de origem.',
                                location: 'Sistema Financeiro'
                            },
                            {
                                date: '05/09/2026 - 11:45',
                                title: 'Solicitação de Cancelamento Aprovada',
                                description: 'O cancelamento foi processado a pedido do cliente.',
                                location: 'Atendimento ao Cliente'
                            }
                        ]
                    }
                },

                currentOrder: null,

                init() {
                    // Default view set to ANDRENETO order
                    this.loadOrder('ANDRENETO');
                },

                loadOrder(orderId) {
                    const found = this.orders[orderId];
                    if (found) {
                        this.currentOrder = found;
                        this.searchQuery = orderId;
                    } else {
                        this.currentOrder = null;
                    }
                },

                searchOrder() {
                    const cleanQuery = this.searchQuery.trim().toUpperCase();
                    if (!cleanQuery) return;

                    // Direct match by ID or Tracking Code
                    if (this.orders[cleanQuery]) {
                        this.currentOrder = this.orders[cleanQuery];
                        return;
                    }

                    // Search by Tracking Code matching
                    const matchByCode = Object.values(this.orders).find(o => o.trackingCode && o.trackingCode.toUpperCase() === cleanQuery);
                    if (matchByCode) {
                        this.currentOrder = matchByCode;
                        return;
                    }

                    // Try prefix match with #
                    const withHash = cleanQuery.startsWith('#') ? cleanQuery : '#' + cleanQuery;
                    if (this.orders[withHash]) {
                        this.currentOrder = this.orders[withHash];
                        return;
                    }

                    // Not found
                    this.currentOrder = null;
                },

                getProgressPercentage() {
                    if (!this.currentOrder || this.currentOrder.statusKey === 'CANCELLED') return 0;
                    const maxSteps = this.steps.length - 1;
                    return Math.min((this.currentOrder.stepIndex / maxSteps) * 100, 100);
                },

                getStatusBadgeClass(statusKey) {
                    switch (statusKey) {
                        case 'DELIVERED':
                            return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
                        case 'SHIPPED':
                            return 'bg-blue-100 text-blue-800 border border-blue-300';
                        case 'PROCESSING':
                            return 'bg-amber-100 text-amber-900 border border-amber-300';
                        case 'CANCELLED':
                            return 'bg-rose-100 text-rose-800 border border-rose-300';
                        default:
                            return 'bg-gray-100 text-gray-800 border border-gray-300';
                    }
                },

                copyTrackingCode(code) {
                    if (!code) return;
                    // Standard fallback copying method compatible with embedded previews
                    const el = document.createElement('textarea');
                    el.value = code;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);

                    this.copied = true;
                    setTimeout(() => {
                        this.copied = false;
                    }, 2000);
                }
            }
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