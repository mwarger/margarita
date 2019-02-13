/**
 * @flow
 * @relayHash 42ee0495387536f1d2d77bd1f51b385b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerContent_locations$ref = any;
export type LocationsByTermInput = {
  term: string
};
export type PlacePickerRendererQueryVariables = {|
  input: LocationsByTermInput
|};
export type PlacePickerRendererQueryResponse = {|
  +$fragmentRefs: PlacePickerContent_locations$ref
|};
export type PlacePickerRendererQuery = {|
  variables: PlacePickerRendererQueryVariables,
  response: PlacePickerRendererQueryResponse,
|};
*/


/*
query PlacePickerRendererQuery(
  $input: LocationsByTermInput!
) {
  ...PlacePickerContent_locations_2VV6jB
}

fragment PlacePickerContent_locations_2VV6jB on RootQuery {
  locationsByTerm(input: $input) {
    ...PlacePickerList_locations
  }
}

fragment PlacePickerList_locations on LocationConnection {
  edges {
    node {
      id
      ...PlaceItem_item
    }
  }
}

fragment PlaceItem_item on Location {
  id
  name
  locationId
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LocationsByTermInput!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlacePickerRendererQuery",
  "id": null,
  "text": "query PlacePickerRendererQuery(\n  $input: LocationsByTermInput!\n) {\n  ...PlacePickerContent_locations_2VV6jB\n}\n\nfragment PlacePickerContent_locations_2VV6jB on RootQuery {\n  locationsByTerm(input: $input) {\n    ...PlacePickerList_locations\n  }\n}\n\nfragment PlacePickerList_locations on LocationConnection {\n  edges {\n    node {\n      id\n      ...PlaceItem_item\n    }\n  }\n}\n\nfragment PlaceItem_item on Location {\n  id\n  name\n  locationId\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerRendererQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PlacePickerContent_locations",
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlacePickerRendererQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locationsByTerm",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "LocationsByTermInput!"
          }
        ],
        "concreteType": "LocationConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "LocationEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Location",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "locationId",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '62b7fdcc1fcf8cb0eaec47f5611fb7ca';
module.exports = node;