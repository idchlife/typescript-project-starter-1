## Public Api

Api Address: http://host.com/api

All requests and responses are with content-type: application/json


### Users

#### Registration

- method: POST
- url: /api/users

parameters:

```json
{
  email: string,
  password: string
}
```

### Masters

#### Registration

- method: POST
- url: /api/masters

parameters:

```json
{
  email: string,
  password: string,
  description?: string, // optional
  name: string, // Name of master/salon/etc
  type: string, // ("MASTER", "STUDIO", "SALON"),
  instagram?: string // for instagram account link. optional
}
```

#### Updating account

parameters:

ALL fields are optional

```json
{
  name: string,
  type: string,
  instagram: string,
  servicePrices: [
    price?: number, // optional
    service_id: number
  ]
}
```

### Search

- method: GET
- url: /api/masters

query parameters

```json
{
  type: string // ("MASTER", "STUDIO", "SALON")
}
```

#### Services

### Getting list of all available services and sub services

- method: GET
- url: /api/services

result:

[
  {
    id: number,
    name: string,
    services: [{ id: number, name: string, services: [] }, ...]
  }
]

