TriggerEvent('esx:getSharedObject', function(obj)
    ESX = obj
end)

local GMDLoadingscreenSteamAPI = "ABV" --steam_webApiKey from you server.cfg


AddEventHandler('playerConnecting', function(_, _, deferrals)
    local ids = ExtractIdentifiers(source)
    local source = source
    local steamID = ""
    if ids.steam ~= "" then
        steamID = ids.steam:gsub( "steam:", "")
    else
        steamID = ""
    end
    steamID = tonumber(steamID,16)
    PerformHttpRequest("http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key="..GMDLoadingscreenSteamAPI.."&steamids="..steamID,
    function(err, text, headers)
        deferrals.handover({
            json = text,
            gmdloadingscreen = "steam"
        })
    end)
end)
function ExtractIdentifiers(src)
    local identifiers = {
        steam = "",
        ip = "",
        discord = "",
        license = "",
        xbl = "",
        live = ""
    }
    for i = 0, GetNumPlayerIdentifiers(src) - 1 do
        local id = GetPlayerIdentifier(src, i)
        if string.find(id, "steam") then
            identifiers.steam = id
            print(identifiers.steam)
        end
    end
    return identifiers
end
