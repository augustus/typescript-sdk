# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">PayoutCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PayoutInitiatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PayoutPaidWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PayoutFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReturnInitiatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReturnPaidWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReturnFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ReturnReturnedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">DepositReceivedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConversionCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConversionCompletedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConversionFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">AccountHolderActiveWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">AccountHolderClosedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">PingTestWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(body) -> void</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">PayoutCreateResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="post /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> PayoutCreateResponse</code>
- <code title="get /v1/payouts/{id}">client.payouts.<a href="./src/resources/payouts.ts">retrieve</a>(id) -> PayoutRetrieveResponse</code>
- <code title="get /v1/payouts">client.payouts.<a href="./src/resources/payouts.ts">list</a>({ ...params }) -> PayoutListResponsesCursorPage</code>

# Deposits

Types:

- <code><a href="./src/resources/deposits.ts">DepositRetrieveResponse</a></code>
- <code><a href="./src/resources/deposits.ts">DepositListResponse</a></code>

Methods:

- <code title="get /v1/deposits/{id}">client.deposits.<a href="./src/resources/deposits.ts">retrieve</a>(id) -> DepositRetrieveResponse</code>
- <code title="get /v1/deposits">client.deposits.<a href="./src/resources/deposits.ts">list</a>({ ...params }) -> DepositListResponsesCursorPage</code>

# Simulations

## Deposits

Types:

- <code><a href="./src/resources/simulations/deposits.ts">DepositCreateResponse</a></code>

Methods:

- <code title="post /v1/simulations/deposits">client.simulations.deposits.<a href="./src/resources/simulations/deposits.ts">create</a>({ ...params }) -> DepositCreateResponse</code>

## Payouts

Types:

- <code><a href="./src/resources/simulations/payouts.ts">PayoutRejectResponse</a></code>
- <code><a href="./src/resources/simulations/payouts.ts">PayoutSendResponse</a></code>

Methods:

- <code title="post /v1/simulations/payouts/{id}/reject">client.simulations.payouts.<a href="./src/resources/simulations/payouts.ts">reject</a>(id, { ...params }) -> PayoutRejectResponse</code>
- <code title="post /v1/simulations/payouts/{id}/send">client.simulations.payouts.<a href="./src/resources/simulations/payouts.ts">send</a>(id) -> PayoutSendResponse</code>

## AccountPrograms

Types:

- <code><a href="./src/resources/simulations/account-programs.ts">AccountProgramCreateResponse</a></code>
- <code><a href="./src/resources/simulations/account-programs.ts">AccountProgramCloseResponse</a></code>
- <code><a href="./src/resources/simulations/account-programs.ts">AccountProgramDrainResponse</a></code>
- <code><a href="./src/resources/simulations/account-programs.ts">AccountProgramFreezeResponse</a></code>
- <code><a href="./src/resources/simulations/account-programs.ts">AccountProgramUnfreezeResponse</a></code>

Methods:

- <code title="post /v1/simulations/account_programs">client.simulations.accountPrograms.<a href="./src/resources/simulations/account-programs.ts">create</a>({ ...params }) -> AccountProgramCreateResponse</code>
- <code title="post /v1/simulations/account_programs/{id}/close">client.simulations.accountPrograms.<a href="./src/resources/simulations/account-programs.ts">close</a>(id, { ...params }) -> AccountProgramCloseResponse</code>
- <code title="post /v1/simulations/account_programs/{id}/drain">client.simulations.accountPrograms.<a href="./src/resources/simulations/account-programs.ts">drain</a>(id, { ...params }) -> AccountProgramDrainResponse</code>
- <code title="post /v1/simulations/account_programs/{id}/freeze">client.simulations.accountPrograms.<a href="./src/resources/simulations/account-programs.ts">freeze</a>(id) -> AccountProgramFreezeResponse</code>
- <code title="post /v1/simulations/account_programs/{id}/unfreeze">client.simulations.accountPrograms.<a href="./src/resources/simulations/account-programs.ts">unfreeze</a>(id) -> AccountProgramUnfreezeResponse</code>

## Accounts

Types:

- <code><a href="./src/resources/simulations/accounts.ts">AccountCreateResponse</a></code>
- <code><a href="./src/resources/simulations/accounts.ts">AccountCloseResponse</a></code>
- <code><a href="./src/resources/simulations/accounts.ts">AccountDrainResponse</a></code>
- <code><a href="./src/resources/simulations/accounts.ts">AccountFreezeResponse</a></code>
- <code><a href="./src/resources/simulations/accounts.ts">AccountUnfreezeResponse</a></code>

Methods:

- <code title="post /v1/simulations/accounts">client.simulations.accounts.<a href="./src/resources/simulations/accounts.ts">create</a>({ ...params }) -> AccountCreateResponse</code>
- <code title="post /v1/simulations/accounts/{id}/close">client.simulations.accounts.<a href="./src/resources/simulations/accounts.ts">close</a>(id, { ...params }) -> AccountCloseResponse</code>
- <code title="post /v1/simulations/accounts/{id}/drain">client.simulations.accounts.<a href="./src/resources/simulations/accounts.ts">drain</a>(id, { ...params }) -> AccountDrainResponse</code>
- <code title="post /v1/simulations/accounts/{id}/freeze">client.simulations.accounts.<a href="./src/resources/simulations/accounts.ts">freeze</a>(id) -> AccountFreezeResponse</code>
- <code title="post /v1/simulations/accounts/{id}/unfreeze">client.simulations.accounts.<a href="./src/resources/simulations/accounts.ts">unfreeze</a>(id) -> AccountUnfreezeResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /v1/transactions/{id}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(id) -> TransactionRetrieveResponse</code>
- <code title="get /v1/transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponsesCursorPage</code>

# Conversions

Types:

- <code><a href="./src/resources/conversions.ts">ConversionCreateResponse</a></code>
- <code><a href="./src/resources/conversions.ts">ConversionRetrieveResponse</a></code>
- <code><a href="./src/resources/conversions.ts">ConversionListResponse</a></code>

Methods:

- <code title="post /v1/conversions">client.conversions.<a href="./src/resources/conversions.ts">create</a>({ ...params }) -> ConversionCreateResponse</code>
- <code title="get /v1/conversions/{id}">client.conversions.<a href="./src/resources/conversions.ts">retrieve</a>(id) -> ConversionRetrieveResponse</code>
- <code title="get /v1/conversions">client.conversions.<a href="./src/resources/conversions.ts">list</a>({ ...params }) -> ConversionListResponsesCursorPage</code>

# Quotes

Types:

- <code><a href="./src/resources/quotes/quotes.ts">QuoteRetrieveResponse</a></code>

Methods:

- <code title="get /v1/quotes/{id}">client.quotes.<a href="./src/resources/quotes/quotes.ts">retrieve</a>(id) -> QuoteRetrieveResponse</code>

## Indicative

Types:

- <code><a href="./src/resources/quotes/indicative.ts">IndicativeRetrieveResponse</a></code>

Methods:

- <code title="get /v1/quotes/indicative">client.quotes.indicative.<a href="./src/resources/quotes/indicative.ts">retrieve</a>({ ...params }) -> IndicativeRetrieveResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountCreateResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountCloseResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountFreezeResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveBalanceResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountUnfreezeResponse</a></code>

Methods:

- <code title="post /v1/accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> AccountCreateResponse</code>
- <code title="get /v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(id) -> AccountRetrieveResponse</code>
- <code title="get /v1/accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponsesCursorPage</code>
- <code title="post /v1/accounts/{id}/close">client.accounts.<a href="./src/resources/accounts.ts">close</a>(id, { ...params }) -> AccountCloseResponse</code>
- <code title="post /v1/accounts/{id}/freeze">client.accounts.<a href="./src/resources/accounts.ts">freeze</a>(id) -> AccountFreezeResponse</code>
- <code title="get /v1/accounts/{id}/balance">client.accounts.<a href="./src/resources/accounts.ts">retrieveBalance</a>(id) -> AccountRetrieveBalanceResponse</code>
- <code title="post /v1/accounts/{id}/unfreeze">client.accounts.<a href="./src/resources/accounts.ts">unfreeze</a>(id) -> AccountUnfreezeResponse</code>

# AccountPrograms

Types:

- <code><a href="./src/resources/account-programs.ts">AccountProgramRetrieveResponse</a></code>
- <code><a href="./src/resources/account-programs.ts">AccountProgramListResponse</a></code>
- <code><a href="./src/resources/account-programs.ts">AccountProgramRetrieveBalanceResponse</a></code>

Methods:

- <code title="get /v1/account_programs/{id}">client.accountPrograms.<a href="./src/resources/account-programs.ts">retrieve</a>(id) -> AccountProgramRetrieveResponse</code>
- <code title="get /v1/account_programs">client.accountPrograms.<a href="./src/resources/account-programs.ts">list</a>({ ...params }) -> AccountProgramListResponsesCursorPage</code>
- <code title="get /v1/account_programs/{id}/balance">client.accountPrograms.<a href="./src/resources/account-programs.ts">retrieveBalance</a>(id) -> AccountProgramRetrieveBalanceResponse</code>

# AccountHolders

Types:

- <code><a href="./src/resources/account-holders.ts">AccountHolderCreateResponse</a></code>
- <code><a href="./src/resources/account-holders.ts">AccountHolderRetrieveResponse</a></code>
- <code><a href="./src/resources/account-holders.ts">AccountHolderUpdateResponse</a></code>
- <code><a href="./src/resources/account-holders.ts">AccountHolderListResponse</a></code>

Methods:

- <code title="post /v1/account_holders">client.accountHolders.<a href="./src/resources/account-holders.ts">create</a>({ ...params }) -> AccountHolderCreateResponse</code>
- <code title="get /v1/account_holders/{id}">client.accountHolders.<a href="./src/resources/account-holders.ts">retrieve</a>(id) -> AccountHolderRetrieveResponse</code>
- <code title="post /v1/account_holders/{id}">client.accountHolders.<a href="./src/resources/account-holders.ts">update</a>(id, { ...params }) -> AccountHolderUpdateResponse</code>
- <code title="get /v1/account_holders">client.accountHolders.<a href="./src/resources/account-holders.ts">list</a>({ ...params }) -> AccountHolderListResponsesCursorPage</code>

# Counterparties

Types:

- <code><a href="./src/resources/counterparties.ts">CounterpartyCreateResponse</a></code>
- <code><a href="./src/resources/counterparties.ts">CounterpartyRetrieveResponse</a></code>
- <code><a href="./src/resources/counterparties.ts">CounterpartyUpdateResponse</a></code>
- <code><a href="./src/resources/counterparties.ts">CounterpartyListResponse</a></code>
- <code><a href="./src/resources/counterparties.ts">CounterpartyBlockResponse</a></code>

Methods:

- <code title="post /v1/counterparties">client.counterparties.<a href="./src/resources/counterparties.ts">create</a>({ ...params }) -> CounterpartyCreateResponse</code>
- <code title="get /v1/counterparties/{id}">client.counterparties.<a href="./src/resources/counterparties.ts">retrieve</a>(id) -> CounterpartyRetrieveResponse</code>
- <code title="post /v1/counterparties/{id}">client.counterparties.<a href="./src/resources/counterparties.ts">update</a>(id, { ...params }) -> CounterpartyUpdateResponse</code>
- <code title="get /v1/counterparties">client.counterparties.<a href="./src/resources/counterparties.ts">list</a>({ ...params }) -> CounterpartyListResponsesCursorPage</code>
- <code title="post /v1/counterparties/{id}/block">client.counterparties.<a href="./src/resources/counterparties.ts">block</a>(id) -> CounterpartyBlockResponse</code>

# Returns

Types:

- <code><a href="./src/resources/returns.ts">ReturnCreateResponse</a></code>
- <code><a href="./src/resources/returns.ts">ReturnRetrieveResponse</a></code>
- <code><a href="./src/resources/returns.ts">ReturnListResponse</a></code>

Methods:

- <code title="post /v1/returns">client.returns.<a href="./src/resources/returns.ts">create</a>({ ...params }) -> ReturnCreateResponse</code>
- <code title="get /v1/returns/{id}">client.returns.<a href="./src/resources/returns.ts">retrieve</a>(id) -> ReturnRetrieveResponse</code>
- <code title="get /v1/returns">client.returns.<a href="./src/resources/returns.ts">list</a>({ ...params }) -> ReturnListResponsesCursorPage</code>

# WebhookSubscriptions

Types:

- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionRetrieveResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionListResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/webhook-subscriptions.ts">WebhookSubscriptionSendTestEventResponse</a></code>

Methods:

- <code title="post /v1/webhook_subscriptions">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">create</a>({ ...params }) -> WebhookSubscriptionCreateResponse</code>
- <code title="get /v1/webhook_subscriptions/{id}">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">retrieve</a>(id) -> WebhookSubscriptionRetrieveResponse</code>
- <code title="post /v1/webhook_subscriptions/{id}">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">update</a>(id, { ...params }) -> WebhookSubscriptionUpdateResponse</code>
- <code title="get /v1/webhook_subscriptions">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">list</a>({ ...params }) -> WebhookSubscriptionListResponsesCursorPage</code>
- <code title="delete /v1/webhook_subscriptions/{id}">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">delete</a>(id) -> WebhookSubscriptionDeleteResponse</code>
- <code title="post /v1/webhook_subscriptions/{id}/send_test_event">client.webhookSubscriptions.<a href="./src/resources/webhook-subscriptions.ts">sendTestEvent</a>(id) -> WebhookSubscriptionSendTestEventResponse</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">EventRetrieveResponse</a></code>
- <code><a href="./src/resources/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /v1/events/{id}">client.events.<a href="./src/resources/events.ts">retrieve</a>(id) -> EventRetrieveResponse</code>
- <code title="get /v1/events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventListResponsesCursorPage</code>

# WebhookDeliveries

Types:

- <code><a href="./src/resources/webhook-deliveries.ts">WebhookDeliveryRetrieveResponse</a></code>
- <code><a href="./src/resources/webhook-deliveries.ts">WebhookDeliveryListResponse</a></code>
- <code><a href="./src/resources/webhook-deliveries.ts">WebhookDeliveryRedeliverResponse</a></code>

Methods:

- <code title="get /v1/webhook_deliveries/{id}">client.webhookDeliveries.<a href="./src/resources/webhook-deliveries.ts">retrieve</a>(id) -> WebhookDeliveryRetrieveResponse</code>
- <code title="get /v1/webhook_deliveries">client.webhookDeliveries.<a href="./src/resources/webhook-deliveries.ts">list</a>({ ...params }) -> WebhookDeliveryListResponsesCursorPage</code>
- <code title="post /v1/webhook_deliveries/{id}/redeliver">client.webhookDeliveries.<a href="./src/resources/webhook-deliveries.ts">redeliver</a>(id) -> WebhookDeliveryRedeliverResponse</code>

# APIVersions

Types:

- <code><a href="./src/resources/api-versions.ts">APIVersionListResponse</a></code>

Methods:

- <code title="get /v1/api_versions">client.apiVersions.<a href="./src/resources/api-versions.ts">list</a>() -> APIVersionListResponse</code>

# Scopes

Types:

- <code><a href="./src/resources/scopes.ts">ScopeListResponse</a></code>

Methods:

- <code title="get /v1/scopes">client.scopes.<a href="./src/resources/scopes.ts">list</a>() -> ScopeListResponse</code>

# APIKeys

Types:

- <code><a href="./src/resources/api-keys.ts">APIKeyIntrospectResponse</a></code>

Methods:

- <code title="get /v1/api_key">client.apiKeys.<a href="./src/resources/api-keys.ts">introspect</a>() -> APIKeyIntrospectResponse</code>
