export interface PaymentDetails {
    id:             string;
    intent:         string;
    status:
        | "COMPLETED"
        | "SAVED"
        | "APPROVED"
        | "VOIDED"
        | "COMPLETED"
        | "PAYER_ACTION_REQUIRED";
    purchase_units: PurchaseUnit[];
    payer:          Payer;
    create_time:    Date;
    update_time:    Date;
    links:          Link[];
}

export interface Link {
    href:   string;
    rel:    string;
    method: string;
}

export interface Payer {
    name:          PayerName;
    email_address: string;
    payer_id:      string;
    address:       PayerAddress;
}

export interface PayerAddress {
    country_code: string;
}

export interface PayerName {
    given_name: string;
    surname:    string;
}

export interface PurchaseUnit {
    reference_id:    string;
    amount:          Amount;
    payee:           Payee;
    soft_descriptor: string;
    shipping:        Shipping;
    payments:        Payments;
}

export interface Amount {
    currency_code: string;
    value:         string;
}

export interface Payee {
    email_address: string;
    merchant_id:   string;
}

export interface Payments {
    captures: Capture[];
}

export interface Capture {
    id:                string;
    status:            string;
    amount:            Amount;
    final_capture:     boolean;
    seller_protection: SellerProtection;
    create_time:       Date;
    update_time:       Date;
}

export interface SellerProtection {
    status:             string;
    dispute_categories: string[];
}

export interface Shipping {
    name:    ShippingName;
    address: ShippingAddress;
}

export interface ShippingAddress {
    address_line_1: string;
    admin_area_2:   string;
    postal_code:    string;
    country_code:   string;
}

export interface ShippingName {
    full_name: string;
}