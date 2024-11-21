FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["CzechSkills2024.Api/CzechSkills2024.Api.csproj", "CzechSkills2024.Api/"]
RUN dotnet restore "CzechSkills2024.Api/CzechSkills2024.Api.csproj"
COPY . .
WORKDIR "/src/CzechSkills2024.Api"
# Enable XML documentation generation during build
RUN dotnet build "CzechSkills2024.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build /p:DocumentationFile=/app/build/CzechSkills2024.Api.xml

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "CzechSkills2024.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false /p:DocumentationFile=/app/publish/CzechSkills2024.Api.xml

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CzechSkills2024.Api.dll"]