import { ApiReference } from '@scalar/nextjs-api-reference';

const config = {
  spec: {
    content: {
      openapi: '3.1.0',
      info: {
        title: 'Stratos DeFi Strategy Marketplace API',
        version: '0.2.0',
        description: `# Stratos API: The Decentralized Strategy Layer

Decentralized marketplace infrastructure for the creation, discovery, and monetization of DeFi intelligence.

Stratos facilitates a composable creator economy where trading strategies are treated as monetizeable data products. Strategy creators can publish, version, and fork sophisticated DeFi logic, while users and AI agents discover and consume these strategies via the X402 protocol. Creators retain full pricing control, with the platform facilitating trustless settlement.

## Key Capabilities

- **Lifecycle Management**: End-to-end strategy creation, validation, semantic versioning, and liveness monitoring.
- **Intelligent Discovery**: Advanced marketplace search with performance-based filtering, risk scoring, and community ratings.
- **Decentralized Settlement**: Native X402 protocol integration for trustless, friction-free payments.
- **Creator Dashboard**: Granular revenue tracking, subscriber analytics, and churn metrics.
- **Composability Engine**: Support for strategy composition (bundling) and forking (remixing), enabling a "GitHub for Alpha" dynamic.
- **Universal Compatibility**: Multi-chain and multi-protocol architecture.

## Commercial Model

- **Creator-First Pricing**: Flexible tools for creators to set flat-fee or streaming-based pricing.
- **Transparent Fees**: 3% protocol fee on transaction volume; 97% net revenue to the creator.
- **Flexible Access**: Native support for one-time unlocking, recurring subscriptions, and pay-per-call (streaming) models.

## Real-Time Infrastructure

- **Low-Latency Streaming**: Built on WebTransport API for high-throughput, bidirectional data streams essential for HFT (High-Frequency Trading) contexts.
- **Live Execution**: Instant broadcast of strategy signals and execution updates.
- **Telemetry**: Real-time market data feeds and performance metric streaming.

## Developer Resources

- **Interactive Docs**: Full OpenAPI specifications powered by Scalar.
- **Endpoint**: \`https://api.stratos.markets/docs\``
      },
      servers: [{ url: 'https://api.stratos.markets/v1', description: 'Production server' }],
      paths: {
        '/strategies': {
          get: {
            summary: 'List strategies',
            description: 'Retrieve a paginated list of all published trading strategies',
            tags: ['Strategies'],
            parameters: [{ name: 'page', in: 'query', schema: { type: 'integer', default: 1 }, description: 'Page number' }, {
              name: 'limit',
              in: 'query',
              schema: { type: 'integer', default: 20, maximum: 100 },
              description: 'Items per page'
            }, {
              name: 'sort',
              in: 'query',
              schema: { type: 'string', enum: ['performance', 'popularity', 'recent'] },
              description: 'Sort order'
            }],
            responses: {
              '200': {
                description: 'Successful response',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        strategies: { type: 'array', items: { $ref: '#/components/schemas/Strategy' } },
                        pagination: { $ref: '#/components/schemas/Pagination' }
                      }
                    }
                  }
                }
              }
            }
          },
          post: {
            summary: 'Create strategy',
            description: 'Publish a new trading strategy to the marketplace',
            tags: ['Strategies'],
            security: [{ BearerAuth: [] }],
            requestBody: {
              required: true,
              content: { 'application/json': { schema: { $ref: '#/components/schemas/CreateStrategyRequest' } } }
            },
            responses: {
              '201': {
                description: 'Strategy created successfully',
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Strategy' } } }
              }
            }
          }
        },
        '/strategies/{strategyId}': {
          get: {
            summary: 'Get strategy',
            description: 'Retrieve detailed information about a specific strategy',
            tags: ['Strategies'],
            parameters: [{ name: 'strategyId', in: 'path', required: true, schema: { type: 'string' }, description: 'Strategy ID' }],
            responses: {
              '200': {
                description: 'Successful response',
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Strategy' } } }
              }
            }
          },
          put: {
            summary: 'Update strategy',
            description: 'Update an existing strategy',
            tags: ['Strategies'],
            security: [{ BearerAuth: [] }],
            parameters: [{ name: 'strategyId', in: 'path', required: true, schema: { type: 'string' } }],
            requestBody: {
              required: true,
              content: { 'application/json': { schema: { $ref: '#/components/schemas/UpdateStrategyRequest' } } }
            },
            responses: {
              '200': {
                description: 'Strategy updated',
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Strategy' } } }
              }
            }
          },
          delete: {
            summary: 'Delete strategy',
            description: 'Remove a strategy from the marketplace',
            tags: ['Strategies'],
            security: [{ BearerAuth: [] }],
            parameters: [{ name: 'strategyId', in: 'path', required: true, schema: { type: 'string' } }],
            responses: { '204': { description: 'Strategy deleted successfully' } }
          }
        },
        '/strategies/{strategyId}/fork': {
          post: {
            summary: 'Fork strategy',
            description: 'Create a new strategy based on an existing one',
            tags: ['Strategies'],
            security: [{ BearerAuth: [] }],
            parameters: [{ name: 'strategyId', in: 'path', required: true, schema: { type: 'string' } }],
            requestBody: {
              content: {
                'application/json': {
                  schema: { type: 'object', properties: { name: { type: 'string' }, modifications: { type: 'string' } } }
                }
              }
            },
            responses: {
              '201': {
                description: 'Strategy forked',
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Strategy' } } }
              }
            }
          }
        },
        '/strategies/{strategyId}/publish': {
          post: {
            summary: 'Publish strategy to marketplace',
            description: 'Make a strategy publicly available',
            tags: ['Strategies'],
            security: [{ BearerAuth: [] }],
            parameters: [{ name: 'strategyId', in: 'path', required: true, schema: { type: 'string' } }],
            responses: { '200': { description: 'Strategy published' } }
          }
        },
        '/strategies/{strategyId}/validate': {
          post: {
            summary: 'Validate strategy',
            description: 'Run validation checks on strategy code',
            tags: ['Strategies'],
            security: [{ BearerAuth: [] }],
            parameters: [{ name: 'strategyId', in: 'path', required: true, schema: { type: 'string' } }],
            responses: {
              '200': {
                description: 'Validation results',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: { valid: { type: 'boolean' }, errors: { type: 'array', items: { type: 'string' } } }
                    }
                  }
                }
              }
            }
          }
        },
        '/strategies/instantiate/{templateId}': {
          post: {
            summary: 'Instantiate template',
            description: 'Create a strategy from a template',
            tags: ['Strategies'],
            security: [{ BearerAuth: [] }],
            parameters: [{ name: 'templateId', in: 'path', required: true, schema: { type: 'string' } }],
            requestBody: {
              content: { 'application/json': { schema: { type: 'object', properties: { parameters: { type: 'object' } } } } }
            },
            responses: { '201': { description: 'Strategy created from template' } }
          }
        },
        '/strategies/user/purchased': {
          get: {
            summary: "Get user's purchased strategies",
            description: 'List all strategies purchased by the authenticated user',
            tags: ['Strategies'],
            security: [{ BearerAuth: [] }],
            responses: {
              '200': {
                description: 'Purchased strategies',
                content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Strategy' } } } }
              }
            }
          }
        },
        '/strategies/{strategyId}/unpublish': {
          post: {
            summary: 'Unpublish strategy',
            description: 'Remove strategy from marketplace',
            tags: ['Strategies'],
            security: [{ BearerAuth: [] }],
            parameters: [{ name: 'strategyId', in: 'path', required: true, schema: { type: 'string' } }],
            responses: { '200': { description: 'Strategy unpublished' } }
          }
        },
        '/templates': {
          get: {
            summary: 'List strategy templates',
            description: 'Get all available strategy templates',
            tags: ['Templates'],
            responses: {
              '200': {
                description: 'Template list',
                content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Template' } } } }
              }
            }
          },
          post: {
            summary: 'Create strategy template',
            description: 'Publish a new template',
            tags: ['Templates'],
            security: [{ BearerAuth: [] }],
            requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/CreateTemplateRequest' } } } },
            responses: { '201': { description: 'Template created' } }
          }
        },
        '/templates/{templateId}': {
          get: {
            summary: 'Get template details',
            description: 'Retrieve information about a specific template',
            tags: ['Templates'],
            parameters: [{ name: 'templateId', in: 'path', required: true, schema: { type: 'string' } }],
            responses: {
              '200': {
                description: 'Template details',
                content: { 'application/json': { schema: { $ref: '#/components/schemas/Template' } } }
              }
            }
          },
          put: {
            summary: 'Update template',
            description: 'Modify an existing template',
            tags: ['Templates'],
            security: [{ BearerAuth: [] }],
            parameters: [{ name: 'templateId', in: 'path', required: true, schema: { type: 'string' } }],
            responses: { '200': { description: 'Template updated' } }
          },
          delete: {
            summary: 'Delete template',
            description: 'Remove a template',
            tags: ['Templates'],
            security: [{ BearerAuth: [] }],
            parameters: [{ name: 'templateId', in: 'path', required: true, schema: { type: 'string' } }],
            responses: { '204': { description: 'Template deleted' } }
          }
        },
        '/templates/{templateId}/instantiate': {
          post: {
            summary: 'Preview template instantiation',
            description: 'Preview what a template would look like with given parameters',
            tags: ['Templates'],
            parameters: [{ name: 'templateId', in: 'path', required: true, schema: { type: 'string' } }],
            responses: { '200': { description: 'Preview generated' } }
          }
        },
        '/templates/categories': {
          get: {
            summary: 'Get template categories',
            description: 'List all template categories',
            tags: ['Templates'],
            responses: { '200': { description: 'Categories list' } }
          }
        },
        '/templates/featured': {
          get: {
            summary: 'Get featured templates',
            description: 'Retrieve curated featured templates',
            tags: ['Templates'],
            responses: { '200': { description: 'Featured templates' } }
          }
        },
        '/marketplace/discover': {
          get: {
            summary: 'Discover strategies',
            description: 'Browse marketplace with filters',
            tags: ['Marketplace'],
            parameters: [{ name: 'category', in: 'query', schema: { type: 'string' } }, {
              name: 'chain',
              in: 'query',
              schema: { type: 'string' }
            }],
            responses: {
              '200': {
                description: 'Discovery results',
                content: { 'application/json': { schema: { type: 'array', items: { $ref: '#/components/schemas/Strategy' } } } }
              }
            }
          }
        },
        '/marketplace/search': {
          post: {
            summary: 'Search marketplace',
            description: 'Advanced search with filters for performance, risk, and tags',
            tags: ['Marketplace'],
            requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/SearchRequest' } } } },
            responses: {
              '200': {
                description: 'Search results',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        results: { type: 'array', items: { $ref: '#/components/schemas/Strategy' } },
                        total: { type: 'integer' }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        '/marketplace/featured': {
          get: {
            summary: 'Get featured strategies',
            description: 'Retrieve curated featured strategies',
            tags: ['Marketplace'],
            responses: { '200': { description: 'Featured strategies' } }
          }
        },
        '/marketplace/trending': {
          get: {
            summary: 'Get trending strategies',
            description: 'Most popular strategies by recent activity',
            tags: ['Marketplace'],
            responses: { '200': { description: 'Trending strategies' } }
          }
        }
      },
      components: {
        schemas: {
          Strategy: {
            type: 'object',
            properties: {
              id: { type: 'string', example: 'strat_abc123' },
              name: { type: 'string', example: 'DCA Bitcoin Strategy' },
              description: { type: 'string' },
              creator: { type: 'string', example: '0x1234...' },
              version: { type: 'string', example: '1.2.0' },
              performance: {
                type: 'object',
                properties: {
                  roi: { type: 'number', example: 24.5 },
                  sharpeRatio: { type: 'number', example: 1.8 },
                  maxDrawdown: { type: 'number', example: -12.3 }
                }
              },
              pricing: {
                type: 'object',
                properties: {
                  type: { type: 'string', enum: ['flat', 'streaming', 'subscription'] },
                  amount: { type: 'number', example: 100 },
                  currency: { type: 'string', example: 'USDC' }
                }
              },
              tags: { type: 'array', items: { type: 'string' } },
              subscribers: { type: 'integer', example: 342 },
              createdAt: { type: 'string', format: 'date-time' }
            }
          },
          CreateStrategyRequest: {
            type: 'object',
            required: ['name', 'code', 'pricing'],
            properties: {
              name: { type: 'string' },
              description: { type: 'string' },
              code: { type: 'string', description: 'Strategy logic code' },
              pricing: {
                type: 'object',
                properties: {
                  type: { type: 'string', enum: ['flat', 'streaming', 'subscription'] },
                  amount: { type: 'number' },
                  currency: { type: 'string' }
                }
              },
              tags: { type: 'array', items: { type: 'string' } }
            }
          },
          UpdateStrategyRequest: {
            type: 'object',
            properties: { name: { type: 'string' }, description: { type: 'string' }, code: { type: 'string' }, pricing: { type: 'object' } }
          },
          Template: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              description: { type: 'string' },
              category: { type: 'string' },
              parameters: { type: 'array', items: { type: 'object' } }
            }
          },
          CreateTemplateRequest: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              description: { type: 'string' },
              code: { type: 'string' },
              parameters: { type: 'array' }
            }
          },
          SearchRequest: {
            type: 'object',
            properties: {
              query: { type: 'string' },
              filters: {
                type: 'object',
                properties: {
                  minRoi: { type: 'number' },
                  maxDrawdown: { type: 'number' },
                  tags: { type: 'array', items: { type: 'string' } },
                  priceRange: { type: 'object', properties: { min: { type: 'number' }, max: { type: 'number' } } }
                }
              }
            }
          },
          CreatorAnalytics: {
            type: 'object',
            properties: {
              totalRevenue: { type: 'number', example: 45000 },
              activeSubscribers: { type: 'integer', example: 234 },
              churnRate: { type: 'number', example: 5.2 },
              topStrategies: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: { strategyId: { type: 'string' }, revenue: { type: 'number' }, subscribers: { type: 'integer' } }
                }
              }
            }
          },
          Pagination: {
            type: 'object',
            properties: { page: { type: 'integer' }, limit: { type: 'integer' }, total: { type: 'integer' }, pages: { type: 'integer' } }
          }
        },
        securitySchemes: {
          BearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', description: 'JWT token-based authentication for API access' }
        }
      },
      tags: [{ name: 'Strategies', description: 'Strategy lifecycle operations' }, {
        name: 'Templates',
        description: 'Strategy template management'
      }, { name: 'Marketplace', description: 'Discovery and search' }]
    }
  },
  theme: 'none',
  customCss: `
    /* Theme: Acid & Bone - Based on Stratos brand palette */
    :root {
      --scalar-header-height: 50px;
      --scalar-sidebar-width: 280px;
      --scalar-container-width: 680px;
      --scalar-toc-width: 280px;
      --scalar-card-icon-width: 40px;
      --scalar-card-icon-height: 40px;
      --scalar-card-icon-diameter: 20px;
      --scalar-card-padding: 16px;
      --scalar-card-inter-element-gap: 4px;
      --scalar-toc-indent-unit: 16px;
      --scalar-row-gap: 16px;
      --scalar-extra-bold: 700;
      --scalar-heading-spacing: 44px;
      --scalar-block-spacing: 12px;
      --scalar-font-size-1: 24px;
      --scalar-text-decoration: none;
      --scalar-text-decoration-hover: underline;
      --scalar-radius: 0px;
      --scalar-radius-lg: 0px;
      --scalar-radius-xl: 0px;
    }

    /* Light Mode: Cream Background, Black Text */
    .light-mode {
      --scalar-background-1: #f2efe9;
      --scalar-background-2: #e8e5de;
      --scalar-background-3: #dbd8d0;
      --scalar-background-accent: rgba(220, 238, 36, 0.15);
      --scalar-color-1: #141414;
      --scalar-color-2: #454545;
      --scalar-color-3: #787878;
      --scalar-color-accent: #141414;
      --scalar-border-color: #dbd8d0;
      --scalar-button-1: #141414;
      --scalar-button-1-hover: #000000;
      --scalar-button-1-color: #dcee24;
      --scalar-color-green: #2fa86d;
      --scalar-color-red: #d92b2b;
      --scalar-color-yellow: #dcee24;
      --scalar-color-blue: #2b7dd9;
      --scalar-color-orange: #e66a00;
      --scalar-color-purple: #7a2bd9;
      --scalar-link-color: var(--scalar-color-1);
      --scalar-link-color-hover: #dcee24;
      --scalar-tooltip-background: #141414;
      --scalar-tooltip-color: #dcee24;
    }

    /* Dark Mode: Charcoal Background, Lime/Cream Text */
    .dark-mode {
      --scalar-background-1: #141414;
      --scalar-background-2: #1f1f1f;
      --scalar-background-3: #2a2a2a;
      --scalar-color-1: #f2efe9;
      --scalar-color-2: #a1a1a1;
      --scalar-color-3: #666666;
      --scalar-color-accent: #dcee24;
      --scalar-background-accent: rgba(220, 238, 36, 0.15);
      --scalar-border-color: #2a2a2a;
      --scalar-button-1: #dcee24;
      --scalar-button-1-hover: #c9db1f;
      --scalar-button-1-color: #141414;
      --scalar-color-green: #dcee24;
      --scalar-color-red: #ff4d4d;
      --scalar-color-yellow: #dcee24;
      --scalar-color-blue: #4da6ff;
      --scalar-color-orange: #ff944d;
      --scalar-color-purple: #b366ff;
      --scalar-link-color: var(--scalar-color-accent);
      --scalar-link-color-hover: #fff;
      --scalar-tooltip-background: #f2efe9;
      --scalar-tooltip-color: #141414;
    }

    /* Sidebar Specifics */
    .light-mode .t-doc__sidebar,
    .dark-mode .t-doc__sidebar {
      --scalar-sidebar-background-1: var(--scalar-background-2);
      --scalar-sidebar-color-1: var(--scalar-color-1);
      --scalar-sidebar-color-2: var(--scalar-color-2);
      --scalar-sidebar-border-color: var(--scalar-border-color);
      --scalar-sidebar-item-hover-background: var(--scalar-background-3);
      --scalar-sidebar-item-hover-color: currentColor;
      --scalar-sidebar-item-active-background: var(--scalar-background-1);
      --scalar-sidebar-color-active: var(--scalar-color-1);
      --scalar-sidebar-indent-border: var(--scalar-sidebar-border-color);
      --scalar-sidebar-indent-border-hover: var(--scalar-sidebar-border-color);
      --scalar-sidebar-indent-border-active: var(--scalar-color-accent);
      --scalar-sidebar-search-background: var(--scalar-background-1);
      --scalar-sidebar-search-color: var(--scalar-color-1);
      --scalar-sidebar-search-border-color: var(--scalar-border-color);
    }

    /* Document Header */
    .light-mode .t-doc__header,
    .dark-mode .t-doc__header {
      --scalar-header-background-1: var(--scalar-background-1);
      --scalar-header-border-color: var(--scalar-border-color);
      --scalar-header-color-1: var(--scalar-color-1);
      --scalar-header-color-2: var(--scalar-color-2);
      --scalar-header-background-toggle: var(--scalar-background-3);
      --scalar-header-call-to-action-color: var(--scalar-button-1-color);
    }

    /* Breathing room above the top-level info section */
    .info-section,
    .t-doc__section:first-child {
      padding-top: 60px;
    }
  `,
  layout: 'modern',
  darkMode: true,
  hideModels: false,
  hideDownloadButton: false,
  showSidebar: true,
  searchHotKey: 'k'
};

export const GET = ApiReference(config);
