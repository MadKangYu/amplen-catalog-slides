# AMPLE:N Catalog Slides — Changelog

## MECE Audit (2026-02-25)

### Data Integrity

| Check | Result |
|---|---|
| Products | 38/38 ✓ |
| Missing IDs | NONE ✓ |
| Duplicate IDs | NONE ✓ |
| nameEn (영문) | 38/38 ✓ |
| nameKr (한글) | 38/38 ✓ |
| nameRu (러시아어) | 38/38 ✓ |
| image (제품사진) | 38/38 ✓ |
| pricing (가격) | 38/38 ✓ |
| Sections | 11/11 ✓ |
| Section titleRu | 11/11 ✓ |
| Orphan sections | NONE ✓ |
| Orphan products | NONE ✓ |

### Project Structure

```
amplen-catalog-slides/
├── index.html           ← Swiper.js 슬라이드 엔트리
├── style.css            ← 다크 럭셔리 테마 (Cormorant Garamond + Outfit)
├── data.js              ← 프론트엔드 제품 데이터 (EN/KR/RU)
├── app.js               ← 슬라이드 동적 생성 + Swiper 초기화
├── data/
│   └── products.json    ← 백엔드 데이터시트 (Single Source of Truth)
├── vercel.json          ← Vercel 정적 배포 설정
└── CHANGELOG.md         ← 이 파일
```

---

## Commits

### v3 — `f816f45` feat: add Russian product names
- 38개 제품 러시아어 공식 화장품 용어 추가
- 11개 섹션 러시아어 라인명 추가
- 프론트엔드: EN → RU → KR 계층 표시
- 백엔드 JSON: `nameRu`, `titleRu` 필드 동기화

### v2 — `fffd3ae` refactor: remove Coupang ×1.1 from frontend
- 타이틀 슬라이드에서 "Coupang ×1.1" 제거
- 딜러 대면용으로 "38 Products · Dealer Pricing"만 표시
- 백엔드 JSON에는 원가 데이터 그대로 보존

### v1 — `c56c77d` feat: initial catalog slides
- Swiper.js 풀스크린 fade 슬라이드 카탈로그
- 38개 제품 MECE: 사진 + EN/KR 이름 + 용량 + USD/KRW 가격
- 11개 라인별 섹션 디바이더
- 다크 럭셔리 테마, 모바일 반응형
- Vercel 정적 배포

---

## Pricing Logic (Backend Only)

- **Source**: 쿠팡 판매가
- **Markup**: ×1.1
- **Exchange Rate**: $1 = ₩1,450
- **Formula**: `usd = round(coupang × 1.1 / 1450, 2)`

---

## Deployments

| Environment | URL |
|---|---|
| Production | https://amplen-catalog-slides.vercel.app |
| GitHub | https://github.com/MadKangYu/amplen-catalog-slides |

---

## Data Source

- 원본: `26.02.19 앰플엔 단가,도착가,판매가,마진 합법,불법 (2).xlsx`
- 시트: 합법30%신고, 합법100%신고, 불법 (3개 시트)
- 제품 이미지: 라이브 사이트 `amplen-uzbekistan-pricing-dealer.vercel.app` 참조
  - 로컬 이미지: 10개 (마스크, BB크림, 틴트)
  - 네이버 쇼핑 CDN: 28개
