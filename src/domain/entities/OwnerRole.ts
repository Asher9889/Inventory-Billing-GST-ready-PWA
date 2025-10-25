import { AbstractRole } from "./AbstractRole";
import { PERMISSIONS } from "./permissions";
import { ROLES } from "./roles";

export class OwnerRole extends AbstractRole {
     // Use a static Set for fast lookup
    private static permissionsSet: Set<string> = new Set([
        // Users & Roles
        PERMISSIONS.USER_CREATE,
        PERMISSIONS.USER_UPDATE,
        PERMISSIONS.USER_DELETE,
        PERMISSIONS.USER_VIEW,
        PERMISSIONS.ROLE_CREATE,
        PERMISSIONS.ROLE_UPDATE,
        PERMISSIONS.ROLE_DELETE,
        PERMISSIONS.ROLE_VIEW,
        // Inventory / Items
        PERMISSIONS.ITEM_CREATE,
        PERMISSIONS.ITEM_UPDATE,
        PERMISSIONS.ITEM_DELETE,
        PERMISSIONS.ITEM_VIEW,
        // Purchase / Supplier
        PERMISSIONS.PURCHASE_CREATE,
        PERMISSIONS.PURCHASE_VIEW,
        PERMISSIONS.SUPPLIER_CREATE,
        PERMISSIONS.SUPPLIER_UPDATE,
        PERMISSIONS.SUPPLIER_VIEW,
        // Sales / Invoice
        PERMISSIONS.INVOICE_CREATE,
        PERMISSIONS.INVOICE_UPDATE,
        PERMISSIONS.INVOICE_VIEW,
        PERMISSIONS.INVOICE_SHARE,
        // Ledger
        PERMISSIONS.LEDGER_VIEW,
        PERMISSIONS.LEDGER_UPDATE,
        // Reports
        PERMISSIONS.REPORT_VIEW,
        PERMISSIONS.REPORT_GST,
        // Company Settings
        PERMISSIONS.COMPANY_UPDATE,
        // System
        PERMISSIONS.SYSTEM_MANAGE
    ]);

    constructor() {
        super(ROLES.OWNER);
    }

    getPermissions(): string[] {
        return Array.from(OwnerRole.permissionsSet);
    }

    canPerform(action: string): boolean {
        return OwnerRole.permissionsSet.has(action);
    }
}