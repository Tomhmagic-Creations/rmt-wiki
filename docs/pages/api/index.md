---

prev:
text: 'Script Events'
link: 'pages/admin/scriptevent'
-------------------------------

# Realm Management Tool API

The Realm Management Tool (RMT) includes a built-in API feature that allows other Add-On developers to interact with RMT through script events. This API is in early development, and more features and hooks will be added in the future.

## 📦 Permission Checks

RMT provides a way to verify a player's permission at a specific location using script events.

**Send Event:** `scriptevent thm_rmt:hasPermission ExternalPermissionCheck`

**Receive Event:** `scriptevent thm_rmt:hasPermissionResponce ExternalPermissionCheckResponce or undefined`

### 🔑 Permission Keys

```ts
enum PermissionKeys {
    Building = "canBuild",
    Breaking = "canBreak",
    UseItem = "useItem",
    Storage = "storageAccess",
    Table = "tableAccess",
    Interactive = "interactiveAccess",
    RespawnBlock = "respawnBlockAccess",
    Utility = "utilityAccess",
    Decoration = "decorationAccess",
    Entity = "entityAccess",
    Misc = "miscAccess",
    SetHome = "setHome",
    SetPlayerWarp = "setPlayerWarp",
}
```

### 📤 Sending Permission Check

To initiate a permission check, send a `scriptevent` with an `ExternalPermissionCheck` object as the message:

**ExternalPermissionCheck Object:**

```ts
interface ExternalPermissionCheck {
    id: string;
    permission: keyof PermissionKeys;
    location: Vector3;
    dimensionID: string;
}
```

**Example Usage:**

```ts
const check = {
  id: player.id,
  permission: "canBuild",
  location: player.location,
  dimensionID: player.dimension.id,
};

world.getDimension(check.dimensionID).runCommand(
  `scriptevent thm_rmt:hasPermission ${JSON.stringify(check)}`
);
```

### 📥 Receiving Permission Response

Listen for the response using the `scriptEventReceive` event. The response will contain an `ExternalPermissionCheckResponce` object or `undefined` if no response is received.

**ExternalPermissionCheckResponce Object:**

```ts
interface ExternalPermissionCheckResponce {
    id: string;
    permission: keyof PermissionKeys;
    location: Vector3;
    dimensionID: string;
    response: boolean | undefined;
}
```

**Example Implementation:**

```ts
async function getPermissionFromRMT(permissionCheck: ExternalPermissionCheck): Promise<ExternalPermissionCheckResponce | undefined> {
  return new Promise((resolve) => {
    const dimension = world.getDimension(permissionCheck.dimensionID);
    dimension.runCommand(
      `scriptevent thm_rmt:hasPermission ${JSON.stringify(permissionCheck)}`
    );

    const subscription = system.afterEvents.scriptEventReceive.subscribe((event) => {
      if (event.id !== "thm_rmt:hasPermissionResponce") return;

      const result = event.message;
      subscription.unsubscribe();

      if (result === "undefined") {
        resolve(undefined);
        return;
      }

      try {
        const response = JSON.parse(result);
        resolve(response);
      } catch {
        resolve(undefined);
      }
    });
  });
}
```

**Calling the Function:**

```ts
const hasPermission = await getPermissionFromRMT({
  id: player.id,
  permission: "canBuild",
  location: player.location,
  dimensionID: player.dimension.id,
});
```

---
