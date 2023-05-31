import Stripe from 'stripe';

export type Event =
  | AccountApplicationEvent
  | AccountExternalAccountEvent
  | AccountEvent
  | ApplicationFeeRefundEvent
  | ApplicationFeeEvent
  | BalanceEvent
  | BillingPortalConfigurationEvent
  | BillingPortalSessionEvent
  | CapabilityEvent
  | CashBalanceEvent
  | ChargeDisputeEvent
  | ChargeRefundEvent
  | ChargeEvent
  | CheckoutSessionEvent
  | CouponEvent
  | CreditNoteEvent
  | CustomerCashBalanceTransactionEvent
  | CustomerDiscountEvent
  | CustomerSourceEvent
  | CustomerSubscriptionEvent
  | CustomerTaxIdEvent
  | CustomerEvent
  | FileEvent
  | FinancialConnectionsAccountEvent
  | IdentityVerificationSessionEvent
  | InvoiceEvent
  | InvoiceitemEvent
  | IssuingAuthorizationEvent
  | IssuingCardEvent
  | IssuingCardholderEvent
  | IssuingDisputeEvent
  | IssuingTransactionEvent
  | MandateEvent
  | OrderEvent
  | PaymentIntentEvent
  | PaymentLinkEvent
  | PaymentMethodEvent
  | PayoutEvent
  | PersonEvent
  | PlanEvent
  | PriceEvent
  | ProductEvent
  | PromotionCodeEvent
  | QuoteEvent
  | RadarEarlyFraudWarningEvent
  | RecipientEvent
  | RefundEvent
  | ReportingReportRunEvent
  | ReportingReportTypeEvent
  | ReviewEvent
  | SetupIntentEvent
  | SigmaScheduledQueryRunEvent
  | SkuEvent
  | SourceTransactionEvent
  | SourceEvent
  | SubscriptionScheduleEvent
  | TaxRateEvent
  | TerminalReaderEvent
  | TestHelpersTestClockEvent
  | TopupEvent
  | TransferEvent
  | TreasuryCreditReversalEvent
  | TreasuryDebitReversalEvent
  | TreasuryFinancialAccountEvent
  | TreasuryInboundTransferEvent
  | TreasuryOutboundPaymentEvent
  | TreasuryOutboundTransferEvent
  | TreasuryReceivedCreditEvent
  | TreasuryReceivedDebitEvent;
  /**
   * All possible event types: https://stripe.com/docs/api/events/types
   */
export type Type =
    | "account.application.authorized"
    | "account.application.deauthorized"
    | "account.external_account.created"
    | "account.external_account.deleted"
    | "account.external_account.updated"
    | "account.updated"
    | "application_fee.created"
    | "application_fee.refund.updated"
    | "application_fee.refunded"
    | "balance.available"
    | "billing_portal.configuration.created"
    | "billing_portal.configuration.updated"
    | "billing_portal.session.created"
    | "capability.updated"
    | "cash_balance.funds_available"
    | "charge.captured"
    | "charge.dispute.closed"
    | "charge.dispute.created"
    | "charge.dispute.funds_reinstated"
    | "charge.dispute.funds_withdrawn"
    | "charge.dispute.updated"
    | "charge.expired"
    | "charge.failed"
    | "charge.pending"
    | "charge.refund.updated"
    | "charge.refunded"
    | "charge.succeeded"
    | "charge.updated"
    | "checkout.session.async_payment_failed"
    | "checkout.session.async_payment_succeeded"
    | "checkout.session.completed"
    | "checkout.session.expired"
    | "coupon.created"
    | "coupon.deleted"
    | "coupon.updated"
    | "credit_note.created"
    | "credit_note.updated"
    | "credit_note.voided"
    | "customer_cash_balance_transaction.created"
    | "customer.created"
    | "customer.deleted"
    | "customer.discount.created"
    | "customer.discount.deleted"
    | "customer.discount.updated"
    | "customer.source.created"
    | "customer.source.deleted"
    | "customer.source.expiring"
    | "customer.source.updated"
    | "customer.subscription.created"
    | "customer.subscription.deleted"
    | "customer.subscription.paused"
    | "customer.subscription.pending_update_applied"
    | "customer.subscription.pending_update_expired"
    | "customer.subscription.resumed"
    | "customer.subscription.trial_will_end"
    | "customer.subscription.updated"
    | "customer.tax_id.created"
    | "customer.tax_id.deleted"
    | "customer.tax_id.updated"
    | "customer.updated"
    | "file.created"
    | "financial_connections.account.created"
    | "financial_connections.account.deactivated"
    | "financial_connections.account.disconnected"
    | "financial_connections.account.reactivated"
    | "financial_connections.account.refreshed_balance"
    | "identity.verification_session.canceled"
    | "identity.verification_session.created"
    | "identity.verification_session.processing"
    | "identity.verification_session.redacted"
    | "identity.verification_session.requires_input"
    | "identity.verification_session.verified"
    | "invoice.created"
    | "invoice.deleted"
    | "invoice.finalization_failed"
    | "invoice.finalized"
    | "invoice.marked_uncollectible"
    | "invoice.paid"
    | "invoice.payment_action_required"
    | "invoice.payment_failed"
    | "invoice.payment_succeeded"
    | "invoice.sent"
    | "invoice.upcoming"
    | "invoice.updated"
    | "invoice.voided"
    | "invoiceitem.created"
    | "invoiceitem.deleted"
    | "invoiceitem.updated"
    | "issuing_authorization.created"
    | "issuing_authorization.request"
    | "issuing_authorization.updated"
    | "issuing_card.created"
    | "issuing_card.updated"
    | "issuing_cardholder.created"
    | "issuing_cardholder.updated"
    | "issuing_dispute.closed"
    | "issuing_dispute.created"
    | "issuing_dispute.funds_reinstated"
    | "issuing_dispute.submitted"
    | "issuing_dispute.updated"
    | "issuing_transaction.created"
    | "issuing_transaction.updated"
    | "mandate.updated"
    | "order.created"
    | "payment_intent.amount_capturable_updated"
    | "payment_intent.canceled"
    | "payment_intent.created"
    | "payment_intent.partially_funded"
    | "payment_intent.payment_failed"
    | "payment_intent.processing"
    | "payment_intent.requires_action"
    | "payment_intent.succeeded"
    | "payment_link.created"
    | "payment_link.updated"
    | "payment_method.attached"
    | "payment_method.automatically_updated"
    | "payment_method.detached"
    | "payment_method.updated"
    | "payout.canceled"
    | "payout.created"
    | "payout.failed"
    | "payout.paid"
    | "payout.reconciliation_completed"
    | "payout.updated"
    | "person.created"
    | "person.deleted"
    | "person.updated"
    | "plan.created"
    | "plan.deleted"
    | "plan.updated"
    | "price.created"
    | "price.deleted"
    | "price.updated"
    | "product.created"
    | "product.deleted"
    | "product.updated"
    | "promotion_code.created"
    | "promotion_code.updated"
    | "quote.accepted"
    | "quote.canceled"
    | "quote.created"
    | "quote.finalized"
    | "radar.early_fraud_warning.created"
    | "radar.early_fraud_warning.updated"
    | "recipient.created"
    | "recipient.deleted"
    | "recipient.updated"
    | "refund.created"
    | "refund.updated"
    | "reporting.report_run.failed"
    | "reporting.report_run.succeeded"
    | "reporting.report_type.updated"
    | "review.closed"
    | "review.opened"
    | "setup_intent.canceled"
    | "setup_intent.created"
    | "setup_intent.requires_action"
    | "setup_intent.setup_failed"
    | "setup_intent.succeeded"
    | "sigma.scheduled_query_run.created"
    | "sku.created"
    | "sku.deleted"
    | "sku.updated"
    | "source.canceled"
    | "source.chargeable"
    | "source.failed"
    | "source.mandate_notification"
    | "source.refund_attributes_required"
    | "source.transaction.created"
    | "source.transaction.updated"
    | "subscription_schedule.aborted"
    | "subscription_schedule.canceled"
    | "subscription_schedule.completed"
    | "subscription_schedule.created"
    | "subscription_schedule.expiring"
    | "subscription_schedule.released"
    | "subscription_schedule.updated"
    | "tax_rate.created"
    | "tax_rate.updated"
    | "terminal.reader.action_failed"
    | "terminal.reader.action_succeeded"
    | "test_helpers.test_clock.advancing"
    | "test_helpers.test_clock.created"
    | "test_helpers.test_clock.deleted"
    | "test_helpers.test_clock.internal_failure"
    | "test_helpers.test_clock.ready"
    | "topup.canceled"
    | "topup.created"
    | "topup.failed"
    | "topup.reversed"
    | "topup.succeeded"
    | "transfer.created"
    | "transfer.reversed"
    | "transfer.updated"
    | "treasury.credit_reversal.created"
    | "treasury.credit_reversal.posted"
    | "treasury.debit_reversal.completed"
    | "treasury.debit_reversal.created"
    | "treasury.debit_reversal.initial_credit_granted"
    | "treasury.financial_account.closed"
    | "treasury.financial_account.created"
    | "treasury.financial_account.features_status_updated"
    | "treasury.inbound_transfer.canceled"
    | "treasury.inbound_transfer.created"
    | "treasury.inbound_transfer.failed"
    | "treasury.inbound_transfer.succeeded"
    | "treasury.outbound_payment.canceled"
    | "treasury.outbound_payment.created"
    | "treasury.outbound_payment.expected_arrival_date_updated"
    | "treasury.outbound_payment.failed"
    | "treasury.outbound_payment.posted"
    | "treasury.outbound_payment.returned"
    | "treasury.outbound_transfer.canceled"
    | "treasury.outbound_transfer.created"
    | "treasury.outbound_transfer.expected_arrival_date_updated"
    | "treasury.outbound_transfer.failed"
    | "treasury.outbound_transfer.posted"
    | "treasury.outbound_transfer.returned"
    | "treasury.received_credit.created"
    | "treasury.received_credit.failed"
    | "treasury.received_credit.succeeded"
    | "treasury.received_debit.created";

interface Data<T> {
  /**
   * Object containing the API resource relevant to the event. For example, an `invoice.created` event will have a full [invoice object](https://stripe.com/docs/api#invoice_object) as the value of the object key.
   */
  object: T;

  /**
   * Object containing the names of the attributes that have changed, and their previous values (sent along only with *.updated events).
   */
  previous_attributes?: Partial<T>;
}

export interface AccountApplicationEvent extends Stripe.Event {
  type:
    | "account.application.authorized"
    | "account.application.deauthorized";
  data: Data<"application">;
}

export interface AccountExternalAccountEvent extends Stripe.Event {
  type:
    | "account.external_account.created"
    | "account.external_account.deleted"
    | "account.external_account.updated";
  data: Data<Stripe.Card | Stripe.BankAccount>;
}

export interface AccountEvent extends Stripe.Event {
  type: "account.updated";
  data: Data<Stripe.Account>;
}

export interface ApplicationFeeRefundEvent extends Stripe.Event {
  type: "application_fee.refund.updated";
  data: Data<Stripe.FeeRefund>;
}

export interface ApplicationFeeEvent extends Stripe.Event {
  type: "application_fee.created" | "application_fee.refunded";
  data: Data<Stripe.ApplicationFee>;
}

export interface BalanceEvent extends Stripe.Event {
  type: "balance.available";
  data: Data<Stripe.Balance>;
}

export interface BillingPortalConfigurationEvent extends Stripe.Event {
  type:
    | "billing_portal.configuration.created"
    | "billing_portal.configuration.updated";
  data: Data<Stripe.BillingPortal.Configuration>;
}

export interface BillingPortalSessionEvent extends Stripe.Event {
  type: "billing_portal.session.created";
  data: Data<Stripe.BillingPortal.Session>;
}

export interface CapabilityEvent extends Stripe.Event {
  type: "capability.updated";
  data: Data<Stripe.Capability>;
}

export interface CashBalanceEvent extends Stripe.Event {
  type: "cash_balance.funds_available";
  data: Data<Stripe.CashBalance>;
}

export interface ChargeDisputeEvent extends Stripe.Event {
  type:
    | "charge.dispute.closed"
    | "charge.dispute.created"
    | "charge.dispute.funds_reinstated"
    | "charge.dispute.funds_withdrawn"
    | "charge.dispute.updated";
  data: Data<Stripe.Dispute>;
}

export interface ChargeRefundEvent extends Stripe.Event {
  type: "charge.refund.updated";
  data: Data<Stripe.Refund>;
}

export interface ChargeEvent extends Stripe.Event {
  type:
    | "charge.captured"
    | "charge.expired"
    | "charge.failed"
    | "charge.pending"
    | "charge.refunded"
    | "charge.succeeded"
    | "charge.updated";
  data: Data<Stripe.Charge>;
}

export interface CheckoutSessionEvent extends Stripe.Event {
  type:
    | "checkout.session.async_payment_failed"
    | "checkout.session.async_payment_succeeded"
    | "checkout.session.completed"
    | "checkout.session.expired";
  data: Data<Stripe.Checkout.Session>;
}

export interface CouponEvent extends Stripe.Event {
  type: "coupon.created" | "coupon.deleted" | "coupon.updated";
  data: Data<Stripe.Coupon>;
}

export interface CreditNoteEvent extends Stripe.Event {
  type:
    | "credit_note.created"
    | "credit_note.updated"
    | "credit_note.voided";
  data: Data<Stripe.CreditNote>;
}

export interface CustomerCashBalanceTransactionEvent extends Stripe.Event {
  type: "customer_cash_balance_transaction.created";
  data: Data<Stripe.CustomerCashBalanceTransaction>;
}

export interface CustomerDiscountEvent extends Stripe.Event {
  type:
    | "customer.discount.created"
    | "customer.discount.deleted"
    | "customer.discount.updated";
  data: Data<Stripe.Discount>;
}

export interface CustomerSourceEvent extends Stripe.Event {
  type:
    | "customer.source.created"
    | "customer.source.deleted"
    | "customer.source.expiring"
    | "customer.source.updated";
  data: Data<Stripe.Card>;
}

export interface CustomerSubscriptionEvent extends Stripe.Event {
  type:
    | "customer.subscription.created"
    | "customer.subscription.deleted"
    | "customer.subscription.paused"
    | "customer.subscription.pending_update_applied"
    | "customer.subscription.pending_update_expired"
    | "customer.subscription.resumed"
    | "customer.subscription.trial_will_end"
    | "customer.subscription.updated";
  data: Data<Stripe.Subscription>;
}

export interface CustomerTaxIdEvent extends Stripe.Event {
  type:
    | "customer.tax_id.created"
    | "customer.tax_id.deleted"
    | "customer.tax_id.updated";
  data: Data<Stripe.TaxId>;
}

export interface CustomerEvent extends Stripe.Event {
  type: "customer.created" | "customer.deleted" | "customer.updated";
  data: Data<Stripe.Customer>;
}

export interface FileEvent extends Stripe.Event {
  type: "file.created";
  data: Data<Stripe.File>;
}

export interface FinancialConnectionsAccountEvent extends Stripe.Event {
  type:
    | "financial_connections.account.created"
    | "financial_connections.account.deactivated"
    | "financial_connections.account.disconnected"
    | "financial_connections.account.reactivated"
    | "financial_connections.account.refreshed_balance";
  data: Data<Stripe.FinancialConnections.Account>;
}

export interface IdentityVerificationSessionEvent extends Stripe.Event {
  type:
    | "identity.verification_session.canceled"
    | "identity.verification_session.created"
    | "identity.verification_session.processing"
    | "identity.verification_session.redacted"
    | "identity.verification_session.requires_input"
    | "identity.verification_session.verified";
  data: Data<Stripe.Identity.VerificationSession>;
}

export interface InvoiceEvent extends Stripe.Event {
  type:
    | "invoice.created"
    | "invoice.deleted"
    | "invoice.finalization_failed"
    | "invoice.finalized"
    | "invoice.marked_uncollectible"
    | "invoice.paid"
    | "invoice.payment_action_required"
    | "invoice.payment_failed"
    | "invoice.payment_succeeded"
    | "invoice.sent"
    | "invoice.upcoming"
    | "invoice.updated"
    | "invoice.voided";
  data: Data<Stripe.Invoice>;
}

export interface InvoiceitemEvent extends Stripe.Event {
  type:
    | "invoiceitem.created"
    | "invoiceitem.deleted"
    | "invoiceitem.updated";
  data: Data<Stripe.InvoiceItem>;
}

export interface IssuingAuthorizationEvent extends Stripe.Event {
  type:
    | "issuing_authorization.created"
    | "issuing_authorization.request"
    | "issuing_authorization.updated";
  data: Data<Stripe.Issuing.Authorization>;
}

export interface IssuingCardEvent extends Stripe.Event {
  type: "issuing_card.created" | "issuing_card.updated";
  data: Data<Stripe.Issuing.Card>;
}

export interface IssuingCardholderEvent extends Stripe.Event {
  type: "issuing_cardholder.created" | "issuing_cardholder.updated";
  data: Data<Stripe.Issuing.Cardholder>;
}

export interface IssuingDisputeEvent extends Stripe.Event {
  type:
    | "issuing_dispute.closed"
    | "issuing_dispute.created"
    | "issuing_dispute.funds_reinstated"
    | "issuing_dispute.submitted"
    | "issuing_dispute.updated";
  data: Data<Stripe.Issuing.Dispute>;
}

export interface IssuingTransactionEvent extends Stripe.Event {
  type: "issuing_transaction.created" | "issuing_transaction.updated";
  data: Data<Stripe.Issuing.Transaction>;
}

export interface MandateEvent extends Stripe.Event {
  type: "mandate.updated";
  data: Data<Stripe.Mandate>;
}

export interface OrderEvent extends Stripe.Event {
  type: "order.created";
  data: Data<Stripe.Event.Data>;
}

export interface PaymentIntentEvent extends Stripe.Event {
  type:
    | "payment_intent.amount_capturable_updated"
    | "payment_intent.canceled"
    | "payment_intent.created"
    | "payment_intent.partially_funded"
    | "payment_intent.payment_failed"
    | "payment_intent.processing"
    | "payment_intent.requires_action"
    | "payment_intent.succeeded";
  data: Data<Stripe.PaymentIntent>;
}

export interface PaymentLinkEvent extends Stripe.Event {
  type: "payment_link.created" | "payment_link.updated";
  data: Data<Stripe.PaymentLink>;
}

export interface PaymentMethodEvent extends Stripe.Event {
  type:
    | "payment_method.attached"
    | "payment_method.automatically_updated"
    | "payment_method.detached"
    | "payment_method.updated";
  data: Data<Stripe.PaymentMethod>;
}

export interface PayoutEvent extends Stripe.Event {
  type:
    | "payout.canceled"
    | "payout.created"
    | "payout.failed"
    | "payout.paid"
    | "payout.reconciliation_completed"
    | "payout.updated";
  data: Data<Stripe.Payout>;
}

export interface PersonEvent extends Stripe.Event {
  type: "person.created" | "person.deleted" | "person.updated";
  data: Data<Stripe.Person>;
}

export interface PlanEvent extends Stripe.Event {
  type: "plan.created" | "plan.deleted" | "plan.updated";
  data: Data<Stripe.Plan>;
}

export interface PriceEvent extends Stripe.Event {
  type: "price.created" | "price.deleted" | "price.updated";
  data: Data<Stripe.Price>;
}

export interface ProductEvent extends Stripe.Event {
  type: "product.created" | "product.deleted" | "product.updated";
  data: Data<Stripe.Product>;
}

export interface PromotionCodeEvent extends Stripe.Event {
  type: "promotion_code.created" | "promotion_code.updated";
  data: Data<Stripe.PromotionCode>;
}

export interface QuoteEvent extends Stripe.Event {
  type:
    | "quote.accepted"
    | "quote.canceled"
    | "quote.created"
    | "quote.finalized";
  data: Data<Stripe.Quote>;
}

export interface RadarEarlyFraudWarningEvent extends Stripe.Event {
  type:
    | "radar.early_fraud_warning.created"
    | "radar.early_fraud_warning.updated";
  data: Data<Stripe.Radar.EarlyFraudWarning>;
}

export interface RecipientEvent extends Stripe.Event {
  type: "recipient.created" | "recipient.deleted" | "recipient.updated";
  data: Data<Stripe.Event.Data>;
}

export interface RefundEvent extends Stripe.Event {
  type: "refund.created" | "refund.updated";
  data: Data<Stripe.Refund>;
}

export interface ReportingReportRunEvent extends Stripe.Event {
  type: "reporting.report_run.failed" | "reporting.report_run.succeeded";
  data: Data<Stripe.Reporting.ReportRun>;
}

export interface ReportingReportTypeEvent extends Stripe.Event {
  type: "reporting.report_type.updated";
  data: Data<Stripe.Reporting.ReportType>;
}

export interface ReviewEvent extends Stripe.Event {
  type: "review.closed" | "review.opened";
  data: Data<Stripe.Review>;
}

export interface SetupIntentEvent extends Stripe.Event {
  type:
    | "setup_intent.canceled"
    | "setup_intent.created"
    | "setup_intent.requires_action"
    | "setup_intent.setup_failed"
    | "setup_intent.succeeded";
  data: Data<Stripe.SetupIntent>;
}

export interface SigmaScheduledQueryRunEvent extends Stripe.Event {
  type: "sigma.scheduled_query_run.created";
  data: Data<Stripe.Sigma.ScheduledQueryRun>;
}

export interface SkuEvent extends Stripe.Event {
  type: "sku.created" | "sku.deleted" | "sku.updated";
  data: Data<Stripe.Event.Data>;
}

export interface SourceTransactionEvent extends Stripe.Event {
  type: "source.transaction.created" | "source.transaction.updated";
  data: Data<Stripe.SourceTransaction>;
}

export interface SourceEvent extends Stripe.Event {
  type:
    | "source.canceled"
    | "source.chargeable"
    | "source.failed"
    | "source.mandate_notification"
    | "source.refund_attributes_required";
  data: Data<Stripe.Card>;
}

export interface SubscriptionScheduleEvent extends Stripe.Event {
  type:
    | "subscription_schedule.aborted"
    | "subscription_schedule.canceled"
    | "subscription_schedule.completed"
    | "subscription_schedule.created"
    | "subscription_schedule.expiring"
    | "subscription_schedule.released"
    | "subscription_schedule.updated";
  data: Data<Stripe.SubscriptionSchedule>;
}

export interface TaxRateEvent extends Stripe.Event {
  type: "tax_rate.created" | "tax_rate.updated";
  data: Data<Stripe.TaxRate>;
}

export interface TerminalReaderEvent extends Stripe.Event {
  type:
    | "terminal.reader.action_failed"
    | "terminal.reader.action_succeeded";
  data: Data<Stripe.Terminal.Reader>;
}

export interface TestHelpersTestClockEvent extends Stripe.Event {
  type:
    | "test_helpers.test_clock.advancing"
    | "test_helpers.test_clock.created"
    | "test_helpers.test_clock.deleted"
    | "test_helpers.test_clock.internal_failure"
    | "test_helpers.test_clock.ready";
  data: Data<Stripe.TestHelpers.TestClock>;
}

export interface TopupEvent extends Stripe.Event {
  type:
    | "topup.canceled"
    | "topup.created"
    | "topup.failed"
    | "topup.reversed"
    | "topup.succeeded";
  data: Data<Stripe.Topup>;
}

export interface TransferEvent extends Stripe.Event {
  type: "transfer.created" | "transfer.reversed" | "transfer.updated";
  data: Data<Stripe.Transfer>;
}

export interface TreasuryCreditReversalEvent extends Stripe.Event {
  type:
    | "treasury.credit_reversal.created"
    | "treasury.credit_reversal.posted";
  data: Data<Stripe.Treasury.CreditReversal>;
}

export interface TreasuryDebitReversalEvent extends Stripe.Event {
  type:
    | "treasury.debit_reversal.completed"
    | "treasury.debit_reversal.created"
    | "treasury.debit_reversal.initial_credit_granted";
  data: Data<Stripe.Treasury.DebitReversal>;
}

export interface TreasuryFinancialAccountEvent extends Stripe.Event {
  type:
    | "treasury.financial_account.closed"
    | "treasury.financial_account.created"
    | "treasury.financial_account.features_status_updated";
  data: Data<Stripe.Treasury.FinancialAccount>;
}

export interface TreasuryInboundTransferEvent extends Stripe.Event {
  type:
    | "treasury.inbound_transfer.canceled"
    | "treasury.inbound_transfer.created"
    | "treasury.inbound_transfer.failed"
    | "treasury.inbound_transfer.succeeded";
  data: Data<Stripe.Treasury.InboundTransfer>;
}

export interface TreasuryOutboundPaymentEvent extends Stripe.Event {
  type:
    | "treasury.outbound_payment.canceled"
    | "treasury.outbound_payment.created"
    | "treasury.outbound_payment.expected_arrival_date_updated"
    | "treasury.outbound_payment.failed"
    | "treasury.outbound_payment.posted"
    | "treasury.outbound_payment.returned";
  data: Data<Stripe.Treasury.OutboundPayment>;
}

export interface TreasuryOutboundTransferEvent extends Stripe.Event {
  type:
    | "treasury.outbound_transfer.canceled"
    | "treasury.outbound_transfer.created"
    | "treasury.outbound_transfer.expected_arrival_date_updated"
    | "treasury.outbound_transfer.failed"
    | "treasury.outbound_transfer.posted"
    | "treasury.outbound_transfer.returned";
  data: Data<Stripe.Treasury.OutboundTransfer>;
}

export interface TreasuryReceivedCreditEvent extends Stripe.Event {
  type:
    | "treasury.received_credit.created"
    | "treasury.received_credit.failed"
    | "treasury.received_credit.succeeded";
  data: Data<Stripe.Treasury.ReceivedCredit>;
}

export interface TreasuryReceivedDebitEvent extends Stripe.Event {
  type: "treasury.received_debit.created";
  data: Data<Stripe.Treasury.ReceivedDebit>;
}
