/*********************************************
 *  Copyright (c) 2013 AnsibleWorks, Inc.
 *
 *  Inventories.js
 *  Form definition for User model
 *
 * 
 */
angular.module('InventoryFormDefinition', [])
    .value(
    'InventoryForm', {
        
        addTitle: 'Create Inventory',
        editTitle: '{{ inventory_name | capitalize }}',
        name: 'inventory',
        parseTypeName: 'inventoryParseType',
        well: true,

        actions: {
            stream: {
                'class': "btn-primary btn-xs activity-btn",
                ngClick: "showActivity()",
                awToolTip: "View Activity Stream",
                dataPlacement: "top",
                icon: "icon-comments-alt",
                mode: 'edit',
                iconSize: 'large',
                ngShow: "user_is_superuser"
                }    
            },
        
        navigationLinks: {
            inventory: {
                href: "/#/inventories/{{ inventory_id }}",
                label: "Properties",
                icon: "icon-edit",
                active: true
                },
            hosts: {
                href: "/#/inventories/{{ inventory_id }}/hosts",
                label: 'Hosts',  
                icon: 'icon-laptop'
                },
            groups: {
                href: "/#/inventories/{{ inventory_id }}/groups",
                label: 'Groups',  
                icon: 'icon-sitemap'
                }
            },

        fields: {
            inventory_name: {
                realName: 'name',
                label: 'Name',
                type: 'text',
                addRequired: true,
                editRequired: true,
                capitalize: false
                },
            inventory_description: { 
                realName: 'description',
                label: 'Description',
                type: 'text',
                addRequired: false,
                editRequired: false
                },
            organization: {
                label: 'Organization',
                type: 'lookup',
                sourceModel: 'organization',
                sourceField: 'name',
                ngClick: 'lookUpOrganization()',
                awRequiredWhen: {variable: "organizationrequired", init: "true" }
                },
            inventory_variables: {
                realName: 'variables',
                label: 'Variables',
                type: 'textarea',
                'class': 'span12',
                addRequired: false,
                editRequird: false, 
                rows: 10,
                "default": "---",
                awPopOver: "<p>Enter inventory variables using either JSON or YAML syntax. Use the radio button to toggle between the two.</p>" +
                    "JSON:<br />\n" +
                    "<blockquote>{<br />\"somevar\": \"somevalue\",<br />\"password\": \"magic\"<br /> }</blockquote>\n" +
                    "YAML:<br />\n" +
                    "<blockquote>---<br />somevar: somevalue<br />password: magic<br /></blockquote>\n" +
                    '<p>View JSON examples at <a href="http://www.json.org" target="_blank">www.json.org</a></p>' +
                    '<p>View YAML examples at <a href="http://www.ansibleworks.com/docs/YAMLSyntax.html" target="_blank">ansibleworks.com</a></p>',
                dataTitle: 'Inventory Variables',
                dataPlacement: 'left',
                dataContainer: 'body'
                }
            },

        buttons: { //for now always generates <button> tags 
            save: { 
                label: 'Save', 
                icon: 'icon-ok',
                "class": 'btn-success',
                ngClick: 'formSave()',    //$scope.function to call on click, optional
                ngDisabled: true          //Disable when $pristine or $invalid, optional
                },
            reset: { 
                ngClick: 'formReset()',
                label: 'Reset',
                icon: 'icon-trash',
                'class': 'btn btn-default',
                ngDisabled: true          //Disabled when $pristine
                }
            },

        related: {

            }

    }); //InventoryForm

