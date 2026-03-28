# Tasks

## 1. Structure project vibe code with Claude Code
# ⚔️ CoC Vibe Coding — Project Structure & Architecture Guide (.NET)

> **Purpose:** This is the single source of truth for the `coc-vibe-coding` repository.
> Claude Code reads this file at the start of every session to behave like a senior .NET developer
> who already knows the codebase, conventions, and goals of this project.
> **Stack:** ASP.NET Core 8 Web API · C# 12 · Entity Framework Core 8 · PostgreSQL 16

---

## 🗂️ Folder Structure

```
coc-vibe-coding/                                    # ← Solution root
│
├── CLAUDE.md                                       # 🧠 AI agent memory — YOU ARE HERE
│                                                   #    Claude Code reads this first every session.
│                                                   #    Update it whenever a new pattern is established.
│
├── CocVibeCoding.sln                               # Visual Studio solution file — lists all projects
├── .editorconfig                                   # Code style rules (indentation, charset, line endings)
├── .gitignore                                      # Standard .NET ignores: bin/, obj/, *.user, .env
├── .env.example                                    # Template for local secrets (never commit .env)
├── global.json                                     # Pins .NET SDK version (e.g. "8.0.300")
├── Directory.Build.props                           # Shared MSBuild properties for all projects
│                                                   #   (Nullable=enable, TreatWarningsAsErrors=true)
├── Directory.Packages.props                        # Central NuGet package version management
│                                                   #   All <PackageVersion> live here.
│                                                   #   Projects reference packages without version numbers.
│
├── /src                                            # 🏰 All production source projects
│   │
│   ├── /CocVibeCoding.Api                          # 🌐 ASP.NET Core Web API — entry point
│   │   ├── CocVibeCoding.Api.csproj                #    References: Domain, Application, Infrastructure
│   │   ├── Program.cs                              #    App bootstrap: builder.Services + middleware pipeline
│   │   ├── appsettings.json                        #    Base config (logging, allowed hosts)
│   │   ├── appsettings.Development.json            #    Dev overrides (local DB, verbose logging)
│   │   │
│   │   ├── /Controllers                            #    Thin controllers — delegate to MediatR immediately
│   │   │   ├── VillagesController.cs               #      GET /villages/{id} · POST /villages
│   │   │   ├── BattlesController.cs                #      POST /battles/start · GET /battles/{id}/replay
│   │   │   ├── ClansController.cs                  #      GET /clans · POST /clans/{id}/join
│   │   │   └── TroopsController.cs                 #      GET /troops · POST /troops/train
│   │   │
│   │   ├── /Middleware                             #    Custom ASP.NET middleware
│   │   │   ├── ExceptionHandlingMiddleware.cs       #      Catches AppException → ProblemDetails JSON response
│   │   │   └── RequestLoggingMiddleware.cs          #      Logs method, path, status, duration (structured)
│   │   │
│   │   └── /Extensions                             #    IServiceCollection extension methods
│   │       ├── ServiceCollectionExtensions.cs       #      Registers all layers (API, App, Infra)
│   │       └── SwaggerExtensions.cs                #      Swagger/OpenAPI setup with JWT auth scheme
│   │
│   ├── /CocVibeCoding.Domain                       # 🏛️  Domain layer — pure C#, ZERO dependencies
│   │   ├── CocVibeCoding.Domain.csproj             #    No NuGet packages. No EF. No HTTP. Nothing external.
│   │   │
│   │   ├── /Entities                               #    Rich domain entities (not anemic models)
│   │   │   ├── Village.cs                          #      Aggregate root: resources, buildings, troops
│   │   │   ├── Battle.cs                           #      Aggregate root: attacker, defender, result
│   │   │   ├── Clan.cs                             #      Aggregate root: members, war log, donations
│   │   │   └── Troop.cs                            #      Entity: stats, training time, housing space
│   │   │
│   │   ├── /ValueObjects                           #    Immutable value objects (equality by value)
│   │   │   ├── Resources.cs                        #      Gold + Elixir + DarkElixir — enforces non-negative
│   │   │   ├── TroopComposition.cs                 #      Army composition with capacity validation
│   │   │   └── BattleResult.cs                     #      Stars (0–3) + destruction percentage
│   │   │
│   │   ├── /DomainEvents                           #    Events raised inside aggregates
│   │   │   ├── BattleCompletedEvent.cs             #      Fired when a battle finishes — carries result
│   │   │   ├── BuildingUpgradedEvent.cs            #      Fired when builder finishes a structure
│   │   │   └── TroopTrainedEvent.cs                #      Fired when a troop finishes training
│   │   │
│   │   ├── /Exceptions                             #    Typed domain exceptions
│   │   │   ├── DomainException.cs                  #      Base class for all domain rule violations
│   │   │   ├── InsufficientResourcesException.cs   #      Thrown when Gold/Elixir is too low
│   │   │   └── VillageNotFoundException.cs         #      Thrown when a village ID doesn't exist
│   │   │
│   │   ├── /Repositories                           #    Repository interfaces (contracts only — no impl)
│   │   │   ├── IVillageRepository.cs               #      GetById, Save, Delete
│   │   │   ├── IBattleRepository.cs                #      GetById, GetByVillage, Save
│   │   │   └── IClanRepository.cs                  #      GetById, GetByName, Save
│   │   │
│   │   └── /Services                               #    Domain services (logic spanning multiple aggregates)
│   │       ├── BattleEngine.cs                     #      Core attack calc: troops vs defenses → stars
│   │       └── ResourceCalculator.cs               #      Production rate, storage caps, loot formulas
│   │
│   ├── /CocVibeCoding.Application                  # 🔧 Application layer — use cases (CQRS via MediatR)
│   │   ├── CocVibeCoding.Application.csproj        #    References: Domain. NuGet: MediatR, FluentValidation
│   │   │
│   │   ├── /Villages                               #    Village use case folder
│   │   │   ├── GetVillage/
│   │   │   │   ├── GetVillageQuery.cs              #      IRequest<VillageDto> — query record
│   │   │   │   ├── GetVillageQueryHandler.cs       #      Reads village from repo, maps to DTO
│   │   │   │   └── VillageDto.cs                   #      Response shape — no domain objects leak to API
│   │   │   └── UpgradeBuilding/
│   │   │       ├── UpgradeBuildingCommand.cs       #      IRequest<Unit> — command record
│   │   │       ├── UpgradeBuildingCommandHandler.cs #     Deducts resources, calls builder state machine
│   │   │       └── UpgradeBuildingValidator.cs     #      FluentValidation — required fields, business rules
│   │   │
│   │   ├── /Battles                                #    Battle use cases (same pattern as Villages)
│   │   │   ├── StartBattle/
│   │   │   └── GetBattleReplay/
│   │   │
│   │   ├── /Clans                                  #    Clan use cases
│   │   │   ├── CreateClan/
│   │   │   └── JoinClan/
│   │   │
│   │   └── /Common                                 #    Shared application plumbing
│   │       ├── /Behaviors
│   │       │   ├── ValidationBehavior.cs           #      MediatR pipeline: runs FluentValidation before handler
│   │       │   └── LoggingBehavior.cs              #      MediatR pipeline: logs every command/query + duration
│   │       └── /Mappings
│   │           └── MappingProfile.cs               #      AutoMapper profile: Domain entity → DTO mappings
│   │
│   └── /CocVibeCoding.Infrastructure               # 🗄️  Infrastructure — all I/O implementations
│       ├── CocVibeCoding.Infrastructure.csproj     #    NuGet: EF Core, Npgsql, Serilog, Hangfire
│       │
│       ├── /Persistence                            #    EF Core implementation
│       │   ├── AppDbContext.cs                     #      DbContext with all DbSets + model configs
│       │   ├── /Configurations                     #      IEntityTypeConfiguration<T> per entity
│       │   │   ├── VillageConfiguration.cs         #        Columns, indexes, OwnsOne for ValueObjects
│       │   │   ├── BattleConfiguration.cs
│       │   │   └── ClanConfiguration.cs
│       │   ├── /Migrations                         #      EF Core auto-generated SQL migrations
│       │   │   └── (auto-generated — never edit)
│       │   └── /Repositories                       #      Concrete implementations of domain interfaces
│       │       ├── VillageRepository.cs            #        Implements IVillageRepository with EF Core
│       │       ├── BattleRepository.cs
│       │       └── ClanRepository.cs
│       │
│       ├── /Jobs                                   #    Background jobs via Hangfire
│       │   ├── ResourceTickJob.cs                  #      Recurring every 60s — increments village resources
│       │   ├── BuildCompleteJob.cs                 #      Fires when builder timer expires
│       │   └── ClanWarSchedulerJob.cs              #      Matches clans, opens war windows
│       │
│       └── /Logging                                #    Serilog configuration
│           └── SerilogConfiguration.cs             #      Structured JSON output — AI-parseable in CI logs
│
├── /tests                                          # 🧪 All test projects
│   │
│   ├── /CocVibeCoding.Domain.Tests                 # ⚡ Unit tests — no I/O, no EF, no HTTP
│   │   ├── CocVibeCoding.Domain.Tests.csproj       #    NuGet: xUnit, FluentAssertions, NSubstitute
│   │   ├── /Entities
│   │   │   ├── VillageTests.cs                     #      Tests: resource deduction, building state machine
│   │   │   └── BattleTests.cs                      #      Tests: star calc, destruction percentage
│   │   ├── /ValueObjects
│   │   │   └── ResourcesTests.cs                   #      Tests: non-negative guard, addition, capping
│   │   └── /Services
│   │       └── BattleEngineTests.cs                #      Tests: troop damage formulas, win conditions
│   │
│   ├── /CocVibeCoding.Application.Tests            # 🔁 Unit tests for command/query handlers
│   │   ├── CocVibeCoding.Application.Tests.csproj
│   │   └── /Villages
│   │       ├── GetVillageQueryHandlerTests.cs      #      NSubstitute mock of IVillageRepository
│   │       └── UpgradeBuildingCommandHandlerTests.cs
│   │
│   ├── /CocVibeCoding.Integration.Tests            # 🐘 Integration tests — real Postgres via Testcontainers
│   │   ├── CocVibeCoding.Integration.Tests.csproj  #    NuGet: Testcontainers.PostgreSql, WebApplicationFactory
│   │   ├── /Api
│   │   │   ├── VillagesApiTests.cs                 #      HTTP calls to real in-process server + real DB
│   │   │   └── BattlesApiTests.cs
│   │   ├── IntegrationTestBase.cs                  #      Starts Postgres container, seeds, tears down
│   │   └── /Fixtures
│   │       └── VillageFixture.cs                   #      Builder pattern for test village objects
│   │
│   └── /CocVibeCoding.E2E.Tests                    # 🎭 End-to-end tests (Playwright — optional)
│       └── BattleFlowTests.cs                      #      Full attack flow: deploy troops → result screen
│
├── /docs                                           # 📚 Human + AI readable documentation
│   ├── ARCHITECTURE.md                             #    System design decisions (ADRs)
│   ├── API.md                                      #    Endpoint reference (auto-sync from Swagger)
│   ├── GAME_MECHANICS.md                           #    CoC rules this codebase implements
│   ├── CONTRIBUTING.md                             #    PR process, branch naming, commit style
│   └── /adr                                        #    Architecture Decision Records
│       ├── ADR-001-clean-architecture.md           #      Why Domain / Application / Infra separation
│       └── ADR-002-mediatr-cqrs.md                 #      Why MediatR for commands and queries
│
├── /scripts                                        # 🛠️  Developer utility scripts (not deployed)
│   ├── add-migration.sh                            #    dotnet ef migrations add <n> with correct flags
│   ├── seed-dev.sh                                 #    Populates dev DB with realistic village data
│   └── run-tests.sh                                #    Runs all test projects with coverage report
│
├── /infra                                          # ☁️  Infrastructure as Code
│   ├── Dockerfile                                  #    Multi-stage: sdk:8.0 → build → aspnet:8.0 runtime
│   ├── docker-compose.yml                          #    Local stack: api + postgres + pgadmin + hangfire UI
│   ├── fly.toml                                    #    Fly.io deploy config (or railway.toml)
│   └── /terraform                                  #    Optional: cloud resource definitions
│
└── /.github                                        # 🤖 GitHub automation
    ├── /workflows
    │   ├── ci.yml                                  #    On every PR: restore → build → test → coverage
    │   ├── deploy.yml                              #    On merge to main: docker build → push → fly deploy
    │   ├── release.yml                             #    On version tag: CHANGELOG → GitHub Release
    │   └── ai-fix.yml                              #    On CI failure: Claude Code auto-fixes & re-pushes
    ├── /ISSUE_TEMPLATE
    │   ├── bug_report.md
    │   └── feature_request.md
    ├── PULL_REQUEST_TEMPLATE.md                    # Checklist: tests added, migration included, no secrets
    └── CODEOWNERS                                  # Auto-assign reviewers by project directory
```

---

## 🧠 Claude Code — Senior .NET Developer Rules

These rules are active in every session. Claude Code must follow them without being reminded.

### Architecture — Clean Architecture layers

```
┌─────────────────────────────────────────────────────────┐
│  CocVibeCoding.Api              (outermost — I/O)        │
│  ┌───────────────────────────────────────────────────┐   │
│  │  CocVibeCoding.Application   (use cases / CQRS)   │   │
│  │  ┌─────────────────────────────────────────────┐  │   │
│  │  │  CocVibeCoding.Domain   (pure C# — no deps)  │  │   │
│  │  └─────────────────────────────────────────────┘  │   │
│  └───────────────────────────────────────────────────┘   │
│  CocVibeCoding.Infrastructure   (EF Core, Hangfire, ...)  │
└─────────────────────────────────────────────────────────┘

Dependency rule: inner layers never reference outer layers.
Domain has ZERO NuGet dependencies — it is the heart of the system.
Infrastructure implements Domain interfaces (Dependency Inversion Principle).
```

### C# coding conventions

- **Nullable reference types:** `<Nullable>enable</Nullable>` in all projects. Every nullable annotated. No `!` suppression without a comment explaining why.
- **Records for immutability:** Use `record` for DTOs, Value Objects, Commands, Queries. Use `class` for Entities and stateful services.
- **Typed IDs — no primitive obsession:** Wrap IDs in typed records: `record VillageId(Guid Value);` — never pass raw `Guid` for entity identity.
- **Result pattern:** Domain methods that can fail return `Result<T>` (use `ErrorOr` NuGet package). Never use exceptions for control flow.
- **Async all the way:** All I/O methods are `async Task<T>`. Never `.Result` or `.Wait()` — causes deadlocks in ASP.NET.
- **Cancellation tokens:** Every async public method accepts `CancellationToken ct = default`. Pass it all the way through.
- **File-scoped namespaces:** `namespace CocVibeCoding.Domain.Entities;` — one line, no braces.
- **Primary constructors:** Use C# 12 primary constructors for services and handlers.

### Naming conventions

| Element | Convention | Example |
|---|---|---|
| Classes / Records | PascalCase | `VillageRepository` |
| Interfaces | `I` prefix | `IVillageRepository` |
| Methods | PascalCase | `GetVillageByIdAsync` |
| Private fields | `_camelCase` | `_dbContext` |
| Local variables | camelCase | `villageId` |
| Constants | PascalCase | `MaxTroopCapacity` |
| Async methods | `…Async` suffix | `SaveAsync` |
| Commands | `…Command` suffix | `UpgradeBuildingCommand` |
| Queries | `…Query` suffix | `GetVillageQuery` |
| DTOs | `…Dto` suffix | `VillageDto` |

### EF Core conventions

- All entity configs use `IEntityTypeConfiguration<T>` in `/Infrastructure/Persistence/Configurations/` — never use Data Annotations on domain entities.
- Use `OwnsOne` for Value Objects embedded in entities.
- Generate migrations with: `dotnet ef migrations add <Name> --project src/CocVibeCoding.Infrastructure --startup-project src/CocVibeCoding.Api`
- Never edit migration files manually. If a migration is wrong, add a corrective one.
- Static reference data (troop stats, building costs) → `OnModelCreating` `.HasData()`.

### Testing standards

- **Unit tests:** xUnit + FluentAssertions + NSubstitute. Test every domain entity method and every handler.
- **Integration tests:** Testcontainers spins up real Postgres per test collection. `WebApplicationFactory<Program>` for HTTP layer tests.
- **Test naming:** `MethodName_StateUnderTest_ExpectedBehavior`
  e.g. `DeductResources_WhenGoldInsufficient_ThrowsInsufficientResourcesException`
- No magic strings in tests — use constants or fixture builders.
- Target ≥ 80% branch coverage on `Domain` and `Application` projects.

### What "done" means

A task is complete when:
1. Code compiles with **zero warnings** (`TreatWarningsAsErrors=true`)
2. All nullable annotations correct — no `#nullable disable`
3. Unit and/or integration tests are green
4. EF Core migration added if any entity or schema changed
5. `CLAUDE.md` updated if a new pattern was introduced
6. PR description references the issue and CI is fully green
7. No hardcoded connection strings, no secrets in code, no commented-out dead code

---

## 🚀 CI/CD Pipeline Detail

```
Push to feature/* branch
        │
        ▼
┌────────────────────────────────────────────────────────────┐
│  ci.yml — GitHub Actions (.NET)                            │
│                                                            │
│  1. setup-dotnet   → pin SDK version from global.json      │
│  2. restore        → dotnet restore  (NuGet cache)         │
│  3. build          → dotnet build --no-restore -warnaserror│
│  4. unit tests     → dotnet test Domain.Tests              │
│                       + Application.Tests                  │
│  5. integration    → dotnet test Integration.Tests         │
│     (Testcontainers auto-pulls postgres:16 Docker image)   │
│  6. coverage       → coverlet → Codecov upload             │
│  7. publish        → dotnet publish -c Release -o /out     │
└────────────────────────────────────────────────────────────┘
        │
        │  If any step fails → ai-fix.yml triggers
        │  Claude Code reads failure logs, opens a fix commit
        ▼
Merge to main (squash)
        │
        ▼
┌────────────────────────────────────────────────────────────┐
│  deploy.yml                                                │
│                                                            │
│  1. Build Docker image (multi-stage, aspnet:8.0 runtime)   │
│  2. Push to GitHub Container Registry (ghcr.io)            │
│  3. fly deploy --image ghcr.io/<org>/coc-api:<sha>         │
│  4. Health check → GET /health → rollback if not 200 OK    │
└────────────────────────────────────────────────────────────┘
        │
        ▼
Push version tag (v1.2.3)
        │
        ▼
┌────────────────────────────────────────────────────────────┐
│  release.yml                                               │
│                                                            │
│  1. Auto-generate CHANGELOG from Conventional Commits      │
│  2. Create GitHub Release with release notes               │
│  3. Notify team via webhook                                │
└────────────────────────────────────────────────────────────┘
```

### Dockerfile (multi-stage .NET 8)

```dockerfile
# Stage 1 — restore & build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY *.sln Directory.Build.props Directory.Packages.props ./
COPY src/ ./src/
RUN dotnet restore
RUN dotnet publish src/CocVibeCoding.Api -c Release -o /out --no-restore

# Stage 2 — runtime image (no SDK, much smaller)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /out .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "CocVibeCoding.Api.dll"]
```

---

## 🌿 Branch & Secrets Strategy

| Branch | Protection | Deploy target | Who writes |
|---|---|---|---|
| `main` | CI green + 1 review | Production (Fly.io) | Squash-merge only |
| `feature/*` | CI required | Preview (optional) | Claude Code + humans |
| `release/v*` | CI required | Staging | Release manager |

**GitHub Secrets vault** — all secrets live here, never in code:

| Secret name | Purpose |
|---|---|
| `DATABASE_URL` | `Host=...;Database=coc;Username=...;Password=...` |
| `FLY_API_TOKEN` | Deploy token for Fly.io |
| `ANTHROPIC_API_KEY` | Claude API key for AI agent features |
| `SENTRY_DSN` | Error tracking ingest URL |
| `CODECOV_TOKEN` | Coverage report upload |

---

## 📡 Observability Stack

| Layer | Tool | Config location |
|---|---|---|
| Structured logs | Serilog (JSON to stdout) | `Infrastructure/Logging/SerilogConfiguration.cs` |
| Error tracking | Sentry.AspNetCore | `Program.cs` → `builder.AddSentry()` |
| Health checks | ASP.NET Health Checks | `Program.cs` → `/health` endpoint |
| Background jobs | Hangfire + dashboard UI | `Infrastructure/Jobs/` |
| Metrics | prometheus-net | `/metrics` endpoint |

Log format (structured JSON — Claude Code reads these to diagnose CI failures):

```json
{
  "Timestamp": "2026-03-26T10:00:00.000Z",
  "Level": "Information",
  "MessageTemplate": "Battle resolved for village {VillageId}",
  "Properties": {
    "VillageId": "village_abc123",
    "Stars": 3,
    "DestructionPct": 100,
    "DurationMs": 42,
    "SourceContext": "CocVibeCoding.Application.Battles.StartBattleCommandHandler"
  }
}
```

---

## 🏗️ Tech Stack Summary

| Concern | Choice | Reason |
|---|---|---|
| Language | C# 12 | Null safety, records, pattern matching — ideal for game domain |
| Framework | ASP.NET Core 8 | Best-in-class perf, minimal overhead, great DI built-in |
| Architecture | Clean Architecture + CQRS | Domain stays pure; scalable; easy to test each layer independently |
| CQRS mediator | MediatR | Decouples controllers from handlers; pipeline behaviors for cross-cutting |
| Validation | FluentValidation | Fluent rules on commands; integrates with MediatR pipeline behavior |
| ORM | Entity Framework Core 8 | Code-first migrations, owned types, strong C# integration |
| Database | PostgreSQL 16 (Npgsql) | JSONB for flexible game state; battle-tested at scale |
| Background jobs | Hangfire | Recurring resource ticks, builder timers, war scheduling |
| Testing | xUnit + FluentAssertions + NSubstitute + Testcontainers | Full unit-to-integration coverage |
| Logging | Serilog (structured JSON) | AI-parseable logs; sinks to stdout + Seq in dev |
| Deploy | Fly.io via Docker | Simple, generous free tier, multi-region, .NET-friendly |
| AI agent | Claude Code CLI | Reads this file, operates the full .NET dev loop |

---

## 🔁 Agent Learning Loop

After completing any non-trivial task, Claude Code must:

1. **Update `CLAUDE.md`** — add new patterns, gotchas, or decisions made during the session
2. **Update `docs/adr/`** — if an architectural decision was made, write a new ADR
3. **Update `docs/GAME_MECHANICS.md`** — if a new CoC rule was implemented
4. **Add EF migration** — if any entity, value object, or schema changed
5. **Check coverage** — run `dotnet test --collect:"XPlat Code Coverage"` and confirm no regression

> A senior .NET developer leaves the codebase cleaner, better-tested, and better-documented
> than they found it. Every session compounds the quality of the system. 🏰

---

*Last updated by Claude Code — session 2026-03-26*
*Stack: ASP.NET Core 8 · C# 12 · EF Core 8 · PostgreSQL 16 · Fly.io*
