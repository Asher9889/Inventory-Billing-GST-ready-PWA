// src/domain/entities/AccountantRole.ts
import { AbstractRole } from "./AbstractRole";
import { PERMISSIONS } from "./permissions";
import { ROLES } from "./roles";

export class AccountantRole extends AbstractRole {
    private static permissionsSet: Set<string> = new Set([
        // Sales / Invoice
        PERMISSIONS.INVOICE_CREATE,
        PERMISSIONS.INVOICE_UPDATE,
        PERMISSIONS.INVOICE_VIEW,
        PERMISSIONS.INVOICE_SHARE,
        // Purchase / Supplier
        PERMISSIONS.PURCHASE_CREATE,
        PERMISSIONS.PURCHASE_VIEW,
        // Ledger
        PERMISSIONS.LEDGER_VIEW,
        PERMISSIONS.LEDGER_UPDATE,
        // Reports
        PERMISSIONS.REPORT_VIEW,
        PERMISSIONS.REPORT_GST
    ]);

    constructor() {
        super(ROLES.ACCOUNTANT);
    }

    getPermissions(): string[] {
        return Array.from(AccountantRole.permissionsSet);
    }

    canPerform(action: string): boolean {
        return AccountantRole.permissionsSet.has(action);
    }
}
