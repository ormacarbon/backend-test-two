"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "openapi": "3.0.1",
    "info": {
        "title": "Backend Test",
        "description": "Documentation of a beers API",
        "contact": {
            "url": "https://github.com/DouglasD18",
            "email": "daguiaralcantara@gmail.com"
        },
        "version": "1.0.0"
    },
    "basePath": "/api",
    "tags": [
        {
            "name": "beers",
            "description": "Beers CRUD"
        }
    ],
    "paths": {
        "/beers/": {
            "post": {
                "description": "Insert a new beer.",
                "tags": [
                    "beers"
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Beer"
                            },
                            "examples": {
                                "beer": {
                                    "value": {
                                        "abv": 10,
                                        "address": "254 Wilkins Street",
                                        "category": "North American Ale",
                                        "city": "Morrisville",
                                        "coordinates": [44.5693, -72.6034],
                                        "country": "United States",
                                        "description": "We brewed THE VERMONSTER with 110 pounds of malt per barrel and jacked up the pour into a wide mouth thin glass goblet. For an amazing pairing get some Smoked Gouda from Taylor Farm Cheese and a friend!",
                                        "ibu": 103,
                                        "name": "The Vermonster",
                                        "state": "Vermont",
                                        "website": "http://www.rockartbrewery.com/"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "Created",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "$ref": "#/components/schemas/Beer"
                                }
                            }
                        },
                        "required": true
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "500": {
                        "description": "Internal Error"
                    }
                }
            },
            "get": {
                "description": "Read a beer.",
                "tags": [
                    "beers"
                ],
                "parameters": {
                    "in": "query",
                    "name": "name",
                    "schema": {
                        "type": "string"
                    },
                    "description": "Name of the beer wanted",
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Ok",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Beer"
                                    }
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "404": {
                        "description": "Not Found"
                    },
                    "500": {
                        "description": "Internal Error"
                    }
                }
            },
            "put": {
                "description": "Update a beer.",
                "tags": [
                    "beers"
                ],
                "parameters": {
                    "in": "query",
                    "name": "name",
                    "schema": {
                        "type": "string"
                    },
                    "description": "Name of the beer wanted",
                    "required": true
                },
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Beer"
                            },
                            "examples": {
                                "beer": {
                                    "value": {
                                        "abv": 5.5,
                                        "address": "63 Trevarthian Road",
                                        "category": "British Ale",
                                        "city": "St. Austell",
                                        "coordinates": [50.3416, -4.7883],
                                        "country": "United Kingdom",
                                        "description": "Proper Job is an authentic IPA brewed with Cornish spring water and malt made from a blend of malts including Cornish grown Maris Otter barley.",
                                        "ibu": 32,
                                        "name": "Proper Job",
                                        "state": "Cornwall",
                                        "website": "http://www.staustellbrewery.co.uk/"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "204": {
                        "description": "No Content",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "$ref": "boolean"
                                }
                            }
                        },
                        "required": true
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "404": {
                        "description": "Not Found"
                    },
                    "500": {
                        "description": "Internal Error"
                    }
                }
            },
            "delete": {
                "description": "Delete a beer.",
                "tags": [
                    "beers"
                ],
                "parameters": {
                    "in": "query",
                    "name": "name",
                    "schema": {
                        "type": "string"
                    },
                    "description": "Name of the beer wanted",
                    "required": true
                },
                "responses": {
                    "204": {
                        "description": "No Content",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "$ref": "boolean"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request"
                    },
                    "404": {
                        "description": "Not Found"
                    },
                    "500": {
                        "description": "Internal Error"
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "Beer": {
                "type": "object",
                "properties": {
                    "abv": {
                        "type": "number"
                    },
                    "address": {
                        "type": "string"
                    },
                    "city": {
                        "type": "string"
                    },
                    "coordinates": {
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "country": {
                        "type": "string"
                    },
                    "ibu": {
                        "type": "number"
                    },
                    "name": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "state": {
                        "type": "string"
                    },
                    "website": {
                        "type": "string"
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=swaggerConfig.js.map