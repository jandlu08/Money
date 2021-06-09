FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 5000

ENV ASPNETCORE_URLS=http://+:5000


FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["backend/IdentityAuth/IdentityAuth.csproj", "backend/IdentityAuth/"]
RUN dotnet restore "backend\IdentityAuth\IdentityAuth.csproj"
COPY . .
WORKDIR "/src/backend/IdentityAuth"
RUN dotnet build "IdentityAuth.csproj" -c Release -o /app/build

RUN dotnet tool install --global dotnet-ef
ENV PATH="${PATH}:/root/.dotnet/tools"
RUN dotnet ef database update

FROM build AS publish
RUN dotnet publish "IdentityAuth.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "IdentityAuth.dll"]
